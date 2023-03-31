import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import { MyButtonComponent, MySelectComponent } from '..';
import FormHouse from './FormHouse';
import FormAddress from './FormAddress';

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
