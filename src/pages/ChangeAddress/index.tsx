import React from 'react';
import FormLayoutTemplate from '../../templates/FormLayoutTemplate';
import { useParams } from 'react-router-dom';
import MyChangingAddress from '../../components/ChangingAddress';

const ChangeAddress = () => {
  const { id } = useParams();

  return (
    <FormLayoutTemplate>
      <MyChangingAddress id={id as string} />
    </FormLayoutTemplate>
  );
};

export default ChangeAddress;
