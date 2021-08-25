import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { getImageUrl } from '../../api';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  background: black;
  align-items: center;
`;

const Card = styled.View`
  width: 90%;
  height: ${height / 1.5}px;
  position: absolute;
  top: 50px; 
`;

const Poster = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const FavsPresenter = ({ discover }) => {
  return (
    <Container>
      {discover.reverse().map((v) => (
        <Card key={v.id}>
          <Poster source={{ uri: getImageUrl(v.poster_path) }} />
        </Card>
      ))}
    </Container>
  );
};

export default FavsPresenter;
