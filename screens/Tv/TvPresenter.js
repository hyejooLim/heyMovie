import React from 'react';
import styled from 'styled-components/native';

import ScreenContainer from '../../components/ScreenContainer';
import HorizontalSlider from '../../components/HorizontalSlider';
import Horizontal from '../../components/Horizontal';

const TvWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

const TvPresenter = ({ loading, today, thisweek, popular, topRated }) => {
  return (
    <TvWrapper>
      <ScreenContainer loading={loading}>
        <HorizontalSlider title='Today Shows'>
          {today.map((show) => (
            <Horizontal
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
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
      </ScreenContainer>
    </TvWrapper>
  );
};

export default TvPresenter;
