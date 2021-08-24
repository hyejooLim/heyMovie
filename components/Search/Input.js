import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TextInput = styled.TextInput`
  background: white;
  padding: 15px 20px;
  margin: 0 30px;
  font-size: 16px;
  border-radius: 10px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <TextInput
      placeholder={placeholder}
      autoFocus={true}
      returnKeyType={'search'}
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
