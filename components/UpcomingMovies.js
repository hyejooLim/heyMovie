import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Poster from './Poster';
import Vote from './Vote';

const Container = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

const Description = styled.View`
  width: 60%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 0 15px 8px 0;
`;

const Date = styled.Text`
  color: white;
  font-size: 12px;
  opacity: 0.7;
`;

const OverView = styled.Text`
  color: white;
  text-align: justify;
  opacity: 0.9;
`;

const UpcomingMovies = ({ id, poster, title, date, votes, overview }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster path={poster} />
        <Description>
          <Title>
            {title.length > 20 ? `${title.slice(0, 20)}...` : title}
          </Title>
          {date ? <Date>{date}</Date> : null}
          <Vote votes={votes} />
          <OverView>
            {overview.length > 120 ? `${overview.slice(0, 120)}...` : overview}
          </OverView>
        </Description>
      </Container>
    </TouchableOpacity>
  );
};

UpcomingMovies.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default UpcomingMovies;
