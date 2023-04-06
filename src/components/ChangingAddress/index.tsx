import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import api from '../../services/api';
import MyChangingProps from '../../Types/Change';
import AddressType from '../../Types/AddressType';
import { useNavigate } from 'react-router-dom';

const MyChangingAddress = (props: MyChangingProps) => {
  const navigate = useNavigate();

  const [address, setAddress] = useState<AddressType>();
  const [number, setNumber] = useState<string>('');

  useEffect(() => {
    async function loadingAddress() {
      const response = await api.get(`/address/${props.id}`);
      setAddress(response.data);
      setNumber(response.data.number);
    }

    loadingAddress();
  }, [setAddress, setNumber]);

  const handleDeleteAddress = useCallback(async () => {
    await api
      .delete(`/address/${props.id}`)
      .then(() => {
        alert('Address deleted successfully');
        navigate('/list-address');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.id]);

  const handleEditAddress = useCallback(async () => {
    const { country, city, code, street } = address as AddressType;

    await api
      .put(`/address/${props.id}`, { number, country, city, code, street })
      .then(() => {
        alert('Address edited successfully');
        navigate('/list-address');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [number, address, props.id]);

  return (
    <Segment stacked>
      <Header as="h1">Edit Address / Delete Address</Header>

      <Form>
        <Form.Input
          fluid
          icon="id badge outline"
          iconPosition="left"
          placeholder="id"
          value={props.id}
          disabled
        />

        <Form.Input
          fluid
          icon="numbered list"
          iconPosition="left"
          placeholder="New Number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />

        <div>
          <Button color="red" size="large" onClick={handleDeleteAddress}>
            Delete
          </Button>
          <Button color="green" size="large" onClick={handleEditAddress}>
            Edit the number
          </Button>
        </div>
      </Form>
    </Segment>
  );
};

export default MyChangingAddress;
