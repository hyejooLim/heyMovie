import React from 'react';
import { Dimensions } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';

import Slider from '../../components/Slider';
import Title from '../../components/Title';
import Horizontal from '../../components/Horizontal';
import Vertical from '../../components/Vertical';
import ScreenContainer from '../../components/ScreenContainer';
import HorizontalSlider from '../../components/HorizontalSlider';

const { width, height } = Dimensions.get('window');

const SliderWrapper = styled.View`
  width: 100%;
  height: ${height / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

const MoviePresenter = ({ loading, nowPlaying, popular, upcoming }) => {
  return (
    <ScreenContainer loading={loading}>
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
      <Container>
        <HorizontalSlider title={'Popular Movies'}>
          {popular.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
        <Title title={'Coming Soon'} />
        {upcoming.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            date={movie.release_date}
            votes={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </Container>
    </ScreenContainer>
  );
};

export default MoviePresenter;
