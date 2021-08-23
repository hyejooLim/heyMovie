import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import ScreenContainer from '../../components/ScreenContainer';
import Poster from '../../components/Poster';
import Vote from '../../components/Vote';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
  height: ${height / 3}px;
  justify-content: flex-end;
`;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
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

const Data = styled.View`
  margin-top: 80px;
  padding: 0 30px;
`;

const DataName = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.9;
  margin-bottom: 10px;
`;

const DataValue = styled.Text`
  color: white;
  font-size: 17px;
  opacity: 0.7;
  text-align: justify;
`;

const DetailPresenter = ({ loading, result }) => {
  return (
    <ScreenContainer loading={loading}>
      <Container>
        <BackgroundImage source={{ uri: result.bgImageUrl }} />
        <Content>
          <Poster path={result.poster} />
          <Description>
            <Title>{result.title}</Title>
            <Vote votes={result.votes} />
          </Description>
        </Content>
      </Container>
      {result.overview && (
        <>
          <Data>
            <DataName>Overview</DataName>
            <DataValue>{result.overview}</DataValue>
          </Data>
        </>
      )}
    </ScreenContainer>
  );
};

export default DetailPresenter;
