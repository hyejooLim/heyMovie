import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Image = styled.Image`
  width: 110px;
  height: 150px;
`;

const Poster = ({ url }) => {
  return <Image source={{ uri: url }} />;
};

Poster.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Poster;
