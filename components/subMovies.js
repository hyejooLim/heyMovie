import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Poster from './Poster';
import Vote from './Vote';

const Container = styled.View`
  margin-right: 15px;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  margin-top: 10px;
  font-weight: 500;
`;

const SubMovies = ({ id, poster, title, votes }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster path={poster} />
        <Title>{title.length > 12 ? `${title.slice(0, 12)}...` : title}</Title>
        <Vote votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

SubMovies.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default SubMovies;
