import React from 'react';
import { Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface MessageProps {
  text: string;
  linkText: string;
  link: string;
}

const MyMessageComponent = (props: MessageProps) => {
  return (
    <Message>
      {props.text} <Link to={props.link}>{props.linkText}</Link>
    </Message>
  );
};

export default MyMessageComponent;
