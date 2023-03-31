import React from 'react';
import { Grid } from 'semantic-ui-react';

interface AddLayoutTemplateProps {
  children: JSX.Element[];
}

const AddLayoutTemplate = (props: AddLayoutTemplateProps) => {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>{props.children}</Grid.Column>
    </Grid>
  );
};

export default AddLayoutTemplate;
