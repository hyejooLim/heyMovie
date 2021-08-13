import React, { useState, useEffect } from 'react';

import { movieApi } from '../../api';
import MoviePresenter from './MoviePresenter';

const Movie = () => {
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upcoming: [],
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    
    setMovies({
      loading: false,
      nowPlaying,
      nowPlayingError,
      popular,
      popularError,
      upcoming,
      upcomingError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MoviePresenter {...movies} />
  );
};

export default Movie;
