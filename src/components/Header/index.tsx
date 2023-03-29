import React from 'react';
import { Header, Image } from 'semantic-ui-react';

interface HeaderProps {
  text: string;
}

const MyHeaderComponent = (props: HeaderProps) => {
  return (
    <Header as="h1" color="orange" textAlign="center">
      <Image src="/assets/house-big.png" /> {props.text}
    </Header>
  );
};

export default MyHeaderComponent;
