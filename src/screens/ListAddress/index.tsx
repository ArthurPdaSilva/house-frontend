import React, { useEffect, useState } from 'react';
import { MyCardAddress } from '../../components';
import ListLayoutTemplate from '../../templates/ListLayoutTemplate';
import { Grid } from 'semantic-ui-react';
import api from '../../services/api';
import AddressType from '../../Types/AddressType';

const ListAddress = () => {
  const [address, setAddress] = useState<AddressType[]>([]);

  useEffect(() => {
    async function loadingAllAddresses() {
      const response = await api.get('/address');
      setAddress(response.data);
    }

    loadingAllAddresses();
  }, []);

  return (
    <ListLayoutTemplate>
      <>
        {address.map((e) => (
          <Grid.Column style={{ minWidth: 300 }} key={e.id}>
            <MyCardAddress address={e} />
          </Grid.Column>
        ))}
      </>
    </ListLayoutTemplate>
  );
};

export default ListAddress;
