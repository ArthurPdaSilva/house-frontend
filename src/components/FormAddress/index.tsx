import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

const MyFormAddress = () => {
  const [street, setStreet] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [code, setCode] = useState<string>('');

  return (
    <Segment stacked>
      <Form>
        <Form.Input
          fluid
          icon="street view"
          iconPosition="left"
          placeholder="Street"
          onChange={(e) => setStreet(e.target.value)}
          value={street}
        />
        <Form.Input
          fluid
          icon="numbered list"
          iconPosition="left"
          placeholder="Number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <Form.Input
          fluid
          icon="point"
          iconPosition="left"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />

        <Form.Group widths="equal">
          <Form.Input
            fluid
            icon="plus"
            iconPosition="left"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
          <Form.Input
            fluid
            icon="barcode"
            iconPosition="left"
            placeholder="Zip Code"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
        </Form.Group>

        <Button color="orange" fluid size="large">
          Confirm
        </Button>
      </Form>
    </Segment>
  );
};

export default MyFormAddress;
