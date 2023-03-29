import React from 'react';
import { Message } from 'semantic-ui-react';

interface MessageProps {
  text: string;
  linkText: string;
  link: string;
}

const MyMessageComponent = (props: MessageProps) => {
  return (
    <Message>
      {props.text} <a href={props.link}>{props.linkText}</a>
    </Message>
  );
};

export default MyMessageComponent;
