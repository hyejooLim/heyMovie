import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Votes = styled.Text`
  color: white;
  font-size: 12px;
  opacity: 0.7;
  margin: 5px 0;
`;

const Vote = ({ votes }) => {
  return <Votes>★ {votes} / 10</Votes>;
};

Vote.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default Vote;
