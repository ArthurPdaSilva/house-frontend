import React, { useCallback, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import HouseType from '../../Types/HouseType';

const MyFormHouse = () => {
  const navigate = useNavigate();

  const [owner, setOwner] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [addressId, setAddressId] = useState<string>('');
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const handleRegisterHouse = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const house: HouseType = {
        owner,
        color,
        addressId,
        height,
        width,
      };

      await api
        .post('/house', house)
        .then(() => {
          alert('successful registration house');
          navigate('/list-houses');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [owner, color, addressId, height, width],
  );

  return (
    <Segment stacked>
      <Form onSubmit={handleRegisterHouse}>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Owner"
          onChange={(e) => setOwner(e.target.value)}
          value={owner}
        />
        <Form.Input
          fluid
          icon="address card"
          iconPosition="left"
          placeholder="addressId"
          onChange={(e) => setAddressId(e.target.value)}
          value={addressId}
        />
        <Form.Input
          fluid
          icon="tint"
          iconPosition="left"
          placeholder="Color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />

        <Form.Group widths="equal">
          <Form.Input
            fluid
            icon="expand arrows alternate"
            iconPosition="left"
            placeholder="Height"
            type="number"
            onChange={(e) => setHeight(Number(e.target.value))}
            value={height}
          />
          <Form.Input
            fluid
            icon="expand arrows alternate"
            iconPosition="left"
            placeholder="Width"
            type="number"
            onChange={(e) => setWidth(Number(e.target.value))}
            value={width}
          />
        </Form.Group>

        <Button color="orange" fluid size="large">
          Confirm
        </Button>
      </Form>
    </Segment>
  );
};

export default MyFormHouse;
