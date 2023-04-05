import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

interface MyChangingHouseProps {
  id: string;
  number: string;
}

const MyChangingAddress = (props: MyChangingHouseProps) => {
  const [number, setNumber] = useState<string>(props.number);

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
