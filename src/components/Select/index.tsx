import React from 'react';
import { Select } from 'semantic-ui-react';

const addressOptions = [
  { key: 'sb', value: 'Serra Branca', text: 'Serra Branca' },
  { key: 'mt', value: 'Monteiro', text: 'Monteiro' },
];

const MySelectComponent = () => {
  return (
    <Select
      placeholder="Select your address"
      fluid
      options={addressOptions}
      style={{ marginBottom: 10 }}
    />
  );
};

export default MySelectComponent;
