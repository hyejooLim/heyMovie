import React, { useState } from 'react';

import { movieApi, tvApi } from '../../api';
import SearchPresenter from './SearchPresenter';

const Search = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState({
    loading: true,
    searchMovie: [],
    searchMovieError: null,
    searchTv: [],
    searchTvError: null,
  });

  const onChangeInput = (text) => {
    setValue(text);
  };

  const onSubmitBtn = async () => {
    if (!value || !value.trim()) {
      return;
    }
    const [searchMovie, searchMovieError] = await movieApi.search(value);
    const [searchTv, searchTvError] = await tvApi.search(value);

    setResult({
      loading: false,
      searchMovie,
      searchMovieError,
      searchTv,
      searchTvError,
    });
  };

  return (
    <SearchPresenter
      {...result}
      value={value}
      onChange={onChangeInput}
      onSubmit={onSubmitBtn}
    />
  );
};

export default Search;
