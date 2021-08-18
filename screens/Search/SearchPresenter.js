import React from 'react';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import HorizontalSlider from '../../components/HorizontalSlider';
import Horizontal from '../../components/Horizontal';

const Container = styled.ScrollView`
  background: black;
  padding: 20px 0;
`;

const Text = styled.Text`
  color: white;
  opacity: 0.7;
  margin: 30px 0 50px 30px;
`;

const SearchPresenter = ({
  value,
  onChange,
  onSubmit,
  loading,
  searchMovie,
  searchTv,
}) => {
  return (
    <Container>
      <Input
        placeholder={'Enter a keyword'}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {loading ? null : <Text>"{value}"에 대한 검색 결과입니다.</Text>}
      {searchMovie.length !== 0 && (
        <HorizontalSlider title={'Movies'}>
          {searchMovie.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}
      {searchTv.length !== 0 && (
        <HorizontalSlider title={'TV Shows'}>
          {searchTv.map((show) => (
            <Horizontal
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}
    </Container>
  );
};

export default SearchPresenter;
