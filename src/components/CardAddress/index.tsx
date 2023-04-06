import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import AddressType from '../../Types/AddressType';
import { useNavigate } from 'react-router-dom';

interface MyCardAddressProps {
  address: AddressType;
}

const MyCardAddress = ({ address }: MyCardAddressProps) => {
  const navigate = useNavigate();

  return (
    <Card
      style={{ cursor: 'pointer' }}
      onClick={() => navigate(`/change-address/${address.id}`)}
    >
      <Image src="/assets/location.png" />
      <Card.Content>
        <Card.Header>
          {address.street} {address.number}
        </Card.Header>
        <Card.Description>City: {address.city}</Card.Description>
        <Card.Description>ID: {address.id}</Card.Description>
      </Card.Content>
      <Card.Content extra style={{ gap: 5, display: 'flex' }}>
        <a>
          <Icon name="plus" />
          Country: {address.country}
        </a>
        <a>
          <Icon name="barcode" />
          Zip Code: {address.code}
        </a>
      </Card.Content>
    </Card>
  );
};

export default MyCardAddress;
