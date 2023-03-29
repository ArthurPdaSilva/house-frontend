import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import MyButtonComponent from '../Button';
import { type } from 'os';
import FormHouse from '../FormHouse';
import FormAddress from '../FormAddress';
import MySelectComponent from '../Select';

interface FormProps {
  type: 'House' | 'Address';
}

const MyFormComponent = (props: FormProps) => {
  return (
    <Form size="large">
      <Segment stacked>
        {props.type == 'House' ? (
          <>
            <FormHouse /> <MySelectComponent />
          </>
        ) : (
          <FormAddress />
        )}
        <MyButtonComponent />
      </Segment>
    </Form>
  );
};

export default MyFormComponent;
