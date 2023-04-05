import React from 'react';
import { MyCardHouse } from '../../components';
import ListLayoutTemplate from '../../templates/ListLayoutTemplate';
import { Grid } from 'semantic-ui-react';

const ListHouses = () => {
  return (
    <ListLayoutTemplate>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardHouse />
      </Grid.Column>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardHouse />
      </Grid.Column>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardHouse />
      </Grid.Column>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardHouse />
      </Grid.Column>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardHouse />
      </Grid.Column>
      <Grid.Column style={{ minWidth: 300 }}>
        <MyCardHouse />
      </Grid.Column>
    </ListLayoutTemplate>
  );
};

export default ListHouses;
