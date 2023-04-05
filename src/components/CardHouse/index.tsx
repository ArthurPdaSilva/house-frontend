import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const MyCardHouse = () => (
  <Card style={{ cursor: 'pointer' }}>
    <Image src="/assets/house-card.png" />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Description>House Color: Red</Card.Description>
      <Card.Description>ID: 12436214321321</Card.Description>
    </Card.Content>
    <Card.Content extra style={{ gap: 20, display: 'flex' }}>
      <a>
        <Icon name="expand arrows alternate" />
        Width: 250
      </a>
      <a>
        <Icon name="expand arrows alternate" />
        Height: 250
      </a>
    </Card.Content>
  </Card>
);

export default MyCardHouse;
