import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Poster from './Poster';
import Vote from './Vote';
import { trimText } from './utils';

const Container = styled.View`
  margin-right: 20;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  margin-top: 10px;
  font-weight: 500;
`;

const Horizontal = ({ id, poster, title, votes }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster path={poster} />
        <Title>{trimText(title, 12)}</Title>
        <Vote votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Horizontal;
