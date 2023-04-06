import FormLayoutTemplate from '../../templates/FormLayoutTemplate';
import {
  MyFormAddress,
  MyFormHouse,
  MyHeaderComponent,
  MyMessageComponent,
} from '../index';
import React from 'react';

interface MyAddComponentProps {
  type: 'Address' | 'House';
}

const MyAddComponent = (props: MyAddComponentProps) => {
  const valuesOfFields =
    props.type === 'Address'
      ? [
          '/assets/address.png',
          'What is your address?',
          'Want to add a house?',
          'Register house',
          '/',
        ]
      : [
          '/assets/house-big.png',
          'Whats your house like?',
          'Is your address too specific?',
          'Register Address',
          'add-address',
        ];

  return (
    <FormLayoutTemplate>
      <MyHeaderComponent
        srcImage={valuesOfFields[0]}
        text={valuesOfFields[1]}
      />

      {props.type === 'Address' ? <MyFormAddress /> : <MyFormHouse />}

      <MyMessageComponent
        text={valuesOfFields[2]}
        linkText={valuesOfFields[3]}
        link={valuesOfFields[4]}
      />
    </FormLayoutTemplate>
  );
};

export default MyAddComponent;
