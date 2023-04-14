import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import api from '../../services/api';
import MyChangingProps from '../../Types/Change';
import HouseType from '../../Types/HouseType';
import { useNavigate } from 'react-router-dom';
import AddressType from '../../Types/AddressType';
import { toast } from 'react-toastify';

const MyChangingHouse = (props: MyChangingProps) => {
  const navigate = useNavigate();

  const [house, setHouse] = useState<HouseType>();
  const [owner, setOwner] = useState<string>('');

  useEffect(() => {
    async function loadingHouse() {
      const response = await api.get(`/house/${props.id}`);
      setOwner(response.data.owner);
      setHouse(response.data);
    }

    loadingHouse();
  }, [setOwner, setHouse]);

  const handleDeleteHouse = useCallback(async () => {
    await api
      .delete(`/house/${props.id}`)
      .then(() => {
        toast.success('House deleted successfully');
        navigate('/list-houses');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.id]);

  const handleEditHouse = useCallback(async () => {
    const { height, width, color, addressId } = house as HouseType;

    await api
      .put(`/house/${props.id}`, { height, width, color, addressId, owner })
      .then(() => {
        toast.success('House edited successfully');
        navigate('/list-houses');
      })
      .catch((error) => {
        toast.error(error);
      });
  }, [house, owner, props.id]);

  return (
    <Segment stacked>
      <Header as="h1">Edit House / Delete House</Header>

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
          icon="user"
          iconPosition="left"
          placeholder="New Owner"
          onChange={(e) => setOwner(e.target.value)}
          value={owner}
        />

        <div>
          <Button color="red" size="large" onClick={handleDeleteHouse}>
            Delete
          </Button>
          <Button color="green" size="large" onClick={handleEditHouse}>
            Edit the owner
          </Button>
        </div>
      </Form>
    </Segment>
  );
};

export default MyChangingHouse;
