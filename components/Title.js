import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Title = ({ title }) => {
  return <Text>{title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
