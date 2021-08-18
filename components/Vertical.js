import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Poster from './Poster';
import Vote from './Vote';
import { getDate, trimText } from './utils';

const Container = styled.View`
  margin: 0 0 20px 30px;
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

const Vertical = ({ id, poster, title, date, votes, overview }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster path={poster} />
        <Description>
          <Title>{trimText(title, 20)}</Title>
          {date ? <Date>{getDate(date)}</Date> : null}
          <Vote votes={votes} />
          <OverView>{trimText(overview, 120)}</OverView>
        </Description>
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Vertical;
