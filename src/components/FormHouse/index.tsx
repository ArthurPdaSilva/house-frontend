import React from 'react';
import { Form } from 'semantic-ui-react';

const FormHouse = () => {
  return (
    <>
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
    </>
  );
};

export default FormHouse;
