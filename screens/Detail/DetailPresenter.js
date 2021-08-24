import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import ScreenContainer from '../../components/ScreenContainer';
import Poster from '../../components/Poster';
import Vote from '../../components/Vote';
import { getDate } from '../../components/utils';
import Link from '../../components/Detail/Link';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
  height: ${height / 3}px;
  justify-content: flex-end;
`;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  position: absolute;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
  padding: 0 30px;
`;

const Description = styled.View`
  width: 60%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Date = styled.Text`
  color: white;
  font-size: 12px;
  opacity: 0.8;
  margin-bottom: 3px;
`;

const Data = styled.View`
  margin-top: 70px;
  padding: 0 30px;
`;

const DataName = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.9;
  margin-bottom: 10px;
`;

const DataValue = styled.Text`
  color: white;
  font-size: 17px;
  opacity: 0.7;
  text-align: justify;
  margin-bottom: 30px;
`;

const DetailPresenter = ({ loading, result, openBrowser }) => {
  return (
    <ScreenContainer loading={loading}>
      <Container>
        <BackgroundImage source={{ uri: result.bgImageUrl }} />
        <Content>
          <Poster path={result.poster} />
          <Description>
            <Title>{result.title}</Title>
            {result.release_date && <Date>{getDate(result.release_date)}</Date>}
            <Vote votes={result.votes} />
          </Description>
        </Content>
      </Container>
      <Data>
        {result.production_countries && (
          <>
            <DataName>Country</DataName>
            <DataValue>
              {result.production_countries.map((v) => `${v.name}`)}
            </DataValue>
          </>
        )}
        {result.genres && (
          <>
            <DataName>Genres</DataName>
            <DataValue>
              {result.genres.map((v, i) =>
                i + 1 === result.genres.length ? v.name : `${v.name}, `
              )}
            </DataValue>
          </>
        )}
        {result.status && (
          <>
            <DataName>Status</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        )}
        {result.overview && (
          <>
            <DataName>Overview</DataName>
            <DataValue>{result.overview}</DataValue>
          </>
        )}
        {result.runtime && (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} minutes</DataValue>
          </>
        )}
        {result.first_air_date && (
          <>
            <DataName>First Air Date</DataName>
            <DataValue>{getDate(result.first_air_date)}</DataValue>
          </>
        )}
        {result.number_of_seasons && (
          <>
            <DataName>Episode / Season</DataName>
            <DataValue>
              {result.number_of_episodes} / {result.number_of_seasons}
            </DataValue>
          </>
        )}
        {result.imdb_id ? (
          <>
            <DataName>Links</DataName>
            <Link
              onPress={() =>
                openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
              }
              icon={'imdb'}
              text={'IMDB Page'}
            />
          </>
        ) : null}
      </Data>
    </ScreenContainer>
  );
};

// 1. <Link onPress={openBrowser} />
// 2. <Link onPress={() => openBrowser()} />
export default DetailPresenter;
