import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';

import ScreenContainer from '../../components/ScreenContainer';
import Slider from '../../components/Slider';
import HorizontalSlider from '../../components/HorizontalSlider';
import Horizontal from '../../components/Horizontal';
import Vertical from '../../components/Vertical';
import Title from '../../components/Title';

const { width, height } = Dimensions.get('window');

const SliderWrapper = styled.View`
  width: 100%;
  height: ${height / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

const TvPresenter = ({ loading, today, thisweek, popular, topRated, getData }) => {
  return (
    <ScreenContainer loading={loading} getData={getData}>
      <SliderWrapper>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {today.map((show) => (
            <Slider
              key={show.id}
              id={show.id}
              title={show.name}
              bgImage={show.backdrop_path}
              poster={show.poster_path}
              votes={show.vote_average}
              overview={show.overview}
            />
          ))}
        </Swiper>
      </SliderWrapper>
      <Container>
        <HorizontalSlider title='Popular Shows'>
          {popular.map((show) => (
            <Horizontal
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <HorizontalSlider title='Top Rated Shows'>
          {topRated.map((show) => (
            <Horizontal
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <Title title={'This Week'} />
        {thisweek.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
            overview={show.overview}
          />
        ))}
      </Container>
    </ScreenContainer>
  );
};

export default TvPresenter;
