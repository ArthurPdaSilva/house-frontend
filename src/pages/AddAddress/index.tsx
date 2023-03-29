import React from 'react';
import { Grid } from 'semantic-ui-react';

import MyHeaderComponent from '../../components/Header';
import MyFormComponent from '../../components/Form';
import MyMessageComponent from '../../components/Message';

const AddAddress = () => {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <MyHeaderComponent text="What is your address?" />
        <MyFormComponent />
        <MyMessageComponent
          text="Want to add a house?"
          linkText="Register house"
          link="add-house"
        />
      </Grid.Column>
    </Grid>
  );
};

export default AddAddress;
