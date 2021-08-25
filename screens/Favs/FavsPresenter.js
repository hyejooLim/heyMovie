import React from 'react';
import { Dimensions, PanResponder, Animated } from 'react-native';
import styled from 'styled-components/native';
import { getImageUrl } from '../../api';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  background: black;
  align-items: center;
`;

const Poster = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const styles = {
  width: '90%',
  height: height / 1.5,
  position: 'absolute',
  top: 50,
};

const FavsPresenter = ({ discover }) => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: {
          x: 0,
          y: 0,
        },
      }).start();
    },
  });

  return (
    <Container>
      {discover.reverse().map((v) => (
        <Animated.View
          key={v.id}
          {...panResponder.panHandlers}
          style={{ ...styles, transform: position.getTranslateTransform() }}
        >
          <Poster source={{ uri: getImageUrl(v.poster_path) }} />
        </Animated.View>
      ))}
    </Container>
  );
};

export default FavsPresenter;
