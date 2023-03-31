import React from 'react';
import AddLayoutTemplate from '../../templates/AddLayoutTemplate';
import {
  MyFormComponent,
  MyHeaderComponent,
  MyMessageComponent,
} from '../../components';

const AddHouse = () => {
  return (
    <AddLayoutTemplate>
      <MyHeaderComponent
        srcImage="/assets/house-big.png"
        text="What's your house like?"
      />
      <MyFormComponent type="House" />
      <MyMessageComponent
        text="Is your address too specific?"
        link="add-address"
        linkText="Register address"
      />
    </AddLayoutTemplate>
  );
};

export default AddHouse;
