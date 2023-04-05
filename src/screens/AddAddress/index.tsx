import React from 'react';
import AddLayoutTemplate from '../../templates/AddLayoutTemplate';
import {
  MyFormComponent,
  MyHeaderComponent,
  MyMessageComponent,
} from '../../components';

const AddAddress = () => {
  return (
    <AddLayoutTemplate>
      <MyHeaderComponent
        srcImage="/assets/address.png"
        text="What is your address?"
      />
      <MyFormComponent type="Address" />
      <MyMessageComponent
        text="Want to add a house?"
        linkText="Register house"
        link="/"
      />
    </AddLayoutTemplate>
  );
};

export default AddAddress;
