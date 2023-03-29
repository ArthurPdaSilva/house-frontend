import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import MyButtonComponent from '../Button';

const MyFormComponent = () => {
  return (
    <Form size="large">
      <Segment stacked>
        <Form.Input fluid icon="user" iconPosition="left" placeholder="Owner" />
        <Form.Input fluid icon="tint" iconPosition="left" placeholder="Color" />

        <Form.Group widths="equal">
          <Form.Input
            fluid
            icon="expand arrows alternate"
            iconPosition="left"
            placeholder="Height"
            type="number"
          />
          <Form.Input
            fluid
            icon="expand arrows alternate"
            iconPosition="left"
            placeholder="Width"
            type="number"
          />
        </Form.Group>

        <MyButtonComponent />
      </Segment>
    </Form>
  );
};

export default MyFormComponent;
