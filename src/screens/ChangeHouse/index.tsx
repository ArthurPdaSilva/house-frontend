import React from 'react';
import FormLayoutTemplate from '../../templates/FormLayoutTemplate';
import { MyChangingHouse } from '../../components';
import { useParams } from 'react-router-dom';

const ChangeHouse = () => {
  const { id } = useParams();

  return (
    <FormLayoutTemplate>
      <MyChangingHouse id={id as string} />
    </FormLayoutTemplate>
  );
};

export default ChangeHouse;
