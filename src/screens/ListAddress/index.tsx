import React from 'react';
import { MyCardAddress } from '../../components';
import ListLayoutTemplate from '../../templates/ListLayoutTemplate';
import { Grid } from 'semantic-ui-react';

const ListAddress = () => {
  return (
    <ListLayoutTemplate>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardAddress />
      </Grid.Column>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardAddress />
      </Grid.Column>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardAddress />
      </Grid.Column>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardAddress />
      </Grid.Column>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardAddress />
      </Grid.Column>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardAddress />
      </Grid.Column>
    </ListLayoutTemplate>
  );
};

export default ListAddress;
