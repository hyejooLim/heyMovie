import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View``;

const TextInput = styled.TextInput`
  background: white;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        returnKeyType={'search'}
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
      />
    </Container>
  );
};

export default Input;
