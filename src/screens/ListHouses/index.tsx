import React, { useEffect, useState } from 'react';
import { MyCardHouse } from '../../components';
import ListLayoutTemplate from '../../templates/ListLayoutTemplate';
import { Grid } from 'semantic-ui-react';
import api from '../../services/api';
import HouseType from '../../Types/HouseType';

const ListHouses = () => {
  const [houses, setHouses] = useState<HouseType[]>([]);

  useEffect(() => {
    async function loadingAllHouses() {
      const response = await api.get('/house');
      setHouses(response.data);
    }

    loadingAllHouses();
  }, [setHouses]);

  return (
    <ListLayoutTemplate>
      <>
        {houses.map((e) => (
          <Grid.Column style={{ minWidth: 300 }} key={e.id}>
            <MyCardHouse house={e} />
          </Grid.Column>
        ))}
      </>
    </ListLayoutTemplate>
  );
};

export default ListHouses;
