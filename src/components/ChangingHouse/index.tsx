import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

interface MyChangingHouseProps {
  id: string;
  owner: string;
}

const MyChangingHouse = (props: MyChangingHouseProps) => {
  const [owner, setOwner] = useState<string>(props.owner);

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
          <Button color="red" size="large">
            Delete
          </Button>
          <Button color="green" size="large">
            Edit the owner
          </Button>
        </div>
      </Form>
    </Segment>
  );
};

export default MyChangingHouse;
