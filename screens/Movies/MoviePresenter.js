import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';

import Slider from '../../components/Movies/Slider';
import Title from '../../components/Title';
import Horizontal from '../../components/Horizontal';
import Vertical from '../../components/Vertical';

const { width, height } = Dimensions.get('window');

const SliderWrapper = styled.View`
  width: 100%;
  height: ${height / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View`
  margin: 0 20px;
`;

const MoviePresenter = ({ loading, nowPlaying, popular, upcoming }) => {
  return (
    <ScrollView
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        // flex: 1,
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
            <Title title={'Popular Movies'} />
            <ScrollView
              style={{ marginBottom: 45 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {popular.map((movie) => (
                <Horizontal
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  votes={movie.vote_average}
                />
              ))}
            </ScrollView>
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
        </>
      )}
    </ScrollView>
  );
};

export default MoviePresenter;
