import React from 'react';
import { Grid } from 'semantic-ui-react';

import MyHeaderComponent from '../../components/Header';
import MyFormComponent from '../../components/Form';
import MyMessageComponent from '../../components/Message';

const AddHouse = () => {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <MyHeaderComponent text="What's your house like?" />
        <MyFormComponent />
        <MyMessageComponent
          text="Is your address too specific?"
          link="add-address"
          linkText="Register address"
        />
      </Grid.Column>
    </Grid>
  );
};

export default AddHouse;
