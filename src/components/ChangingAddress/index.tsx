import React, { useEffect, useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import api from '../../services/api';
import MyChangingProps from '../../Types/Change';

const MyChangingAddress = (props: MyChangingProps) => {
  const [number, setNumber] = useState<string>('');

  useEffect(() => {
    async function loadingAddress() {
      const response = await api.get(`/address/${props.id}`);
      setNumber(response.data.number);
    }

    loadingAddress();
  }, [setNumber]);

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
          <Button color="red" size="large">
            Delete
          </Button>
          <Button color="green" size="large">
            Edit the number
          </Button>
        </div>
      </Form>
    </Segment>
  );
};

export default MyChangingAddress;
