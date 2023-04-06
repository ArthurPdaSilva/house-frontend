import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import HouseType from '../../Types/HouseType';
import { useNavigate } from 'react-router-dom';

interface MyCardHouseProps {
  house: HouseType;
}

const MyCardHouse = ({ house }: MyCardHouseProps) => {
  const navigate = useNavigate();

  return (
    <Card
      style={{ cursor: 'pointer' }}
      onClick={() => navigate(`/change-house/${house.id}`)}
    >
      <Image src="/assets/house-card.png" />
      <Card.Content>
        <Card.Header>{house.owner}</Card.Header>
        <Card.Description>
          <span style={{ color: house.color }}>Color: {house.color}</span>
        </Card.Description>
        <Card.Description>ID: {house.id}</Card.Description>
        <Card.Description>ID Address: {house.addressId}</Card.Description>
      </Card.Content>
      <Card.Content extra style={{ gap: 20, display: 'flex' }}>
        <a>
          <Icon name="expand arrows alternate" />
          Width: {house.width}
        </a>
        <a>
          <Icon name="expand arrows alternate" />
          Height: {house.height}
        </a>
      </Card.Content>
    </Card>
  );
};

export default MyCardHouse;
