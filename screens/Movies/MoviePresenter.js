import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';

import Slider from '../../components/Movies/Slider';
import Title from '../../components/Title';
import SubMovies from '../../components/subMovies';

const { width, height } = Dimensions.get('window');

const SliderWrapper = styled.View`
  width: ${width}px;
  height: ${height / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

const MoviePresenter = ({ loading, nowPlaying, popular }) => {
  return (
    <ScrollView
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: loading ? 'center' : 'flex-start',
      }}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
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
            <Title title='Popular Movies' />
            <ScrollView
              style={{ marginLeft: 20 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {popular.map((movie) => (
                <SubMovies
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  votes={movie.vote_average}
                />
              ))}
            </ScrollView>
          </Container>
        </>
      )}
    </ScrollView>
  );
};

export default MoviePresenter;
