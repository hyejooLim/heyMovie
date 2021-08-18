import React from 'react';
import styled from 'styled-components/native';

import Input from '../../components/Input';

const Container = styled.ScrollView`
  background: black;
`;

const SearchPresenter = ({ value, onChange, onSubmit }) => {
  return (
    <Container>
      <Input
        placeholder={'Enter a keyword'}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

export default SearchPresenter;
