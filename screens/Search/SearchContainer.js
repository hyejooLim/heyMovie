import React, { useState, useCallback } from 'react';

import SearchPresenter from './SearchPresenter';

const Search = () => {
  const [value, setValue] = useState('');

  const onChangeInput = useCallback((text) => {
    setValue(text);
  }, []);

  const onSubmitBtn = useCallback(() => {
    console.log(`Enter Button ${value}`);
  }, [value]);

  return (
    <SearchPresenter
      value={value}
      onChange={onChangeInput}
      onSubmit={onSubmitBtn}
    />
  );
};

export default Search;
