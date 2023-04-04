import React from 'react';
import { Segment } from 'semantic-ui-react';
import FormHouse from './FormHouse';
import FormAddress from './FormAddress';

interface FormProps {
  type: 'House' | 'Address';
}

const MyFormComponent = (props: FormProps) => {
  return (
    <>
      <Segment stacked>
        {props.type == 'House' ? (
          <>
            <FormHouse />
          </>
        ) : (
          <FormAddress />
        )}
      </Segment>
    </>
  );
};

export default MyFormComponent;
