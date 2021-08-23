import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { getImageUrl } from '../api';
import { trimText } from './utils';
import Poster from './Poster';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Description = styled.View`
  width: 60%;
  align-items: flex-start;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom: 8px;
`;

const Votes = styled.Text`
  color: white;
  font-size: 12px;
  opacity: 0.7;
  margin-bottom: 8px;
`;

const Overview = styled.Text`
  color: white;
  opacity: 0.7;
  font-weight: 500;
  text-align: justify;
  margin-bottom: 8px;
`;

const Button = styled.View`
  background: #50aaf3;
  padding: 6px 10px;
  border-radius: 4px;
`;

const Text = styled.Text`
  color: white;
`;

const Slider = ({ id, title, bgImage, poster, votes, overview, isTv = false }) => {
  const bgImageUrl = getImageUrl(bgImage);
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Detail', {
      id,
      title,
      bgImageUrl,
      poster,
      votes,
      overview,
      isTv,
    });
  };

  return (
    <Container>
      <BackgroundImage source={{ uri: bgImageUrl }} />
      <Content>
        <Poster path={poster} />
        <Description>
          <Title>{trimText(title, 40)}</Title>
          <Votes>★ {votes} / 10</Votes>
          <Overview>{trimText(overview, 120)}</Overview>
          <TouchableOpacity onPress={onPress}>
            <Button>
              <Text>See More</Text>
            </Button>
          </TouchableOpacity>
        </Description>
      </Content>
    </Container>
  );
};

Slider.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  bgImage: PropTypes.string,
  poster: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slider;
