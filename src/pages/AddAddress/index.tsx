import React from 'react';
import { Grid } from 'semantic-ui-react';

import MyHeaderComponent from '../../components/Header';
import MyFormComponent from '../../components/Form';
import MyMessageComponent from '../../components/Message';

const AddAddress = () => {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
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
      </Grid.Column>
    </Grid>
  );
};

export default AddAddress;
