import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const MyCardHouse = () => (
  <Card>
    <Image src="/assets/house-card.png" />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Red House</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra style={{ gap: 20, display: 'flex' }}>
      <a>
        <Icon name="expand arrows alternate" />
        Width: 250
      </a>
      <a>
        <Icon name="expand arrows alternate" />
        Heigth: 250
      </a>
    </Card.Content>
  </Card>
);

export default MyCardHouse;
