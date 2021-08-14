import React from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Slider from '../../components/Movies/Slider';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  background: black;
  justify-content: center;
`;

const SliderWrapper = styled.View`
  width: ${width}px;
  height: ${height / 4}px;
`;

const MoviePresenter = ({ loading, nowPlaying }) => {
  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <SliderWrapper>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <Slider
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                bgImage={movie.backdrop_path}
                poster={movie.poster_path}
                votes={movie.vote_average}
                overview={movie.overview}
              />
            ))}
          </Swiper>
        </SliderWrapper>
      )}
    </Container>
  );
};

MoviePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  nowPlaying: PropTypes.arrayOf.isRequired,
};

export default MoviePresenter;
