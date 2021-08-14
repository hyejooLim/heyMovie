import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { getImageUrl } from '../api';

const Image = styled.Image`
  width: 100px;
  height: 140px;
`;

const Poster = ({ path }) => {
  const imageUrl = getImageUrl(path);

  return <Image source={{ uri: imageUrl }} />;
};

Poster.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Poster;
