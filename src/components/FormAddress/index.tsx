import React from 'react';
import { Form } from 'semantic-ui-react';

const FormAddress = () => {
  return (
    <>
      <Form.Input
        fluid
        icon="street view"
        iconPosition="left"
        placeholder="Street"
      />
      <Form.Input
        fluid
        icon="numbered list"
        iconPosition="left"
        placeholder="Number"
      />
      <Form.Input fluid icon="point" iconPosition="left" placeholder="City" />

      <Form.Group widths="equal">
        <Form.Input
          fluid
          icon="plus"
          iconPosition="left"
          placeholder="Country"
        />
        <Form.Input
          fluid
          icon="numbered list"
          iconPosition="left"
          placeholder="Zip Code"
        />
      </Form.Group>
    </>
  );
};

export default FormAddress;
