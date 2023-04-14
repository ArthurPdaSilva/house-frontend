import React, { useEffect, useState } from 'react';
import { MyCardHouse } from '../../components';
import ListLayoutTemplate from '../../templates/ListLayoutTemplate';
import { Grid } from 'semantic-ui-react';
import api from '../../services/api';
import HouseType from '../../Types/HouseType';
import { toast } from 'react-toastify';

const ListHouses = () => {
  const [houses, setHouses] = useState<HouseType[]>([]);

  useEffect(() => {
    async function loadingAllHouses() {
      await api
        .get('/house')
        .then((value) => {
          setHouses(value.data);
        })
        .catch((error) => toast.error(error));
    }

    loadingAllHouses();
  }, []);

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
