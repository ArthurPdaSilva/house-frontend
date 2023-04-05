import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const MyCardAddress = () => (
  <Card style={{ cursor: 'pointer' }}>
    <Image src="/assets/location.png" />
    <Card.Content>
      <Card.Header>Odozão 44</Card.Header>
      <Card.Description>City: Serra Branca</Card.Description>
      <Card.Description>ID: 12436214321321</Card.Description>
    </Card.Content>
    <Card.Content extra style={{ gap: 5, display: 'flex' }}>
      <a>
        <Icon name="plus" />
        Country: BR
      </a>
      <a>
        <Icon name="barcode" />
        Zip Code: 2502323
      </a>
    </Card.Content>
  </Card>
);

export default MyCardAddress;
