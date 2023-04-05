import React from 'react';
import { Grid } from 'semantic-ui-react';

interface ListLayoutTemplateProps {
  children: JSX.Element | JSX.Element[];
}

const ListLayoutTemplate = (props: ListLayoutTemplateProps) => {
  return <Grid style={{ height: '100vh', margin: 10 }}>{props.children}</Grid>;
};

export default ListLayoutTemplate;
