import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { getImageUrl } from '../api';

const Image = styled.Image`
  width: 100px;
  height: 140px;
`;

const Poster = ({ path }) => {
  const imageUrl = path ? getImageUrl(path) : 'https://images.unsplash.com/photo-1560109947-543149eceb16?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';

  return <Image source={{ uri: imageUrl }} />;
};

Poster.propTypes = {
  path: PropTypes.string,
};

export default Poster;
