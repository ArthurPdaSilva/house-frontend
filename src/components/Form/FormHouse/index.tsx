import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import  {MyButtonComponent, MySelectComponent } from '../../';

const FormHouse = () => {
  const [owner, setOwner] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  return (
    <Form>
      <Form.Input fluid icon="user" iconPosition="left" placeholder="Owner" onChange={(e) => setOwner(e.target.value)}
          value={owner} />
      <Form.Input fluid icon="tint" iconPosition="left" placeholder="Color" onChange={(e) => setColor(e.target.value)}
          value={color} />

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

      <MySelectComponent />
      <MyButtonComponent />
    </Form>
  );
};

export default FormHouse;
