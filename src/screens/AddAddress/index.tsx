import React from 'react';
import FormLayoutTemplate from '../../templates/FormLayoutTemplate';
import {
  MyFormAddress,
  MyHeaderComponent,
  MyMessageComponent,
} from '../../components';

const AddAddress = () => {
  return (
    <FormLayoutTemplate>
      <MyHeaderComponent
        srcImage="/assets/address.png"
        text="What is your address?"
      />
      <MyFormAddress />
      <MyMessageComponent
        text="Want to add a house?"
        linkText="Register house"
        link="/"
      />
    </FormLayoutTemplate>
  );
};

export default AddAddress;
