import React from 'react';
import FormLayoutTemplate from '../../templates/FormLayoutTemplate';
import {
  MyFormHouse,
  MyHeaderComponent,
  MyMessageComponent,
} from '../../components';

const AddHouse = () => {
  return (
    <FormLayoutTemplate>
      <MyHeaderComponent
        srcImage="/assets/house-big.png"
        text="What's your house like?"
      />
      <MyFormHouse />
      <MyMessageComponent
        text="Is your address too specific?"
        link="add-address"
        linkText="Register address"
      />
    </FormLayoutTemplate>
  );
};

export default AddHouse;
