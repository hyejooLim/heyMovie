import React, { useState } from 'react';
import { Dimensions, PanResponder, Animated } from 'react-native';
import styled from 'styled-components/native';
import { getImageUrl } from '../../api';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

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
  height: HEIGHT / 1.5,
  position: 'absolute',
  top: 50,
};

const FavsPresenter = ({ result }) => {
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((prev) => prev + 1);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx <= -250) {
        Animated.spring(position, {
          toValue: {
            x: -WIDTH - 100,
            y: dy,
          },
        }).start(nextCard);
      } else if (dx >= 250) {
        Animated.spring(position, {
          toValue: {
            x: WIDTH + 100,
            y: dy,
          },
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
        }).start();
      }
    },
  });
  const rotationValue = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.2, 1],
    extrapolate: 'clamp',
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.7, 1],
    extrapolate: 'clamp',
  });

  return (
    <Container>
      {result.map((v, idx) => {
        if (idx < topIndex) { // 버려진 카드는 렌더링하지 않음
          return null;
        } else if (idx === topIndex) {
          return (
            <Animated.View
              key={v.id}
              {...panResponder.panHandlers}
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: rotationValue },
                  ...position.getTranslateTransform(),
                ],
              }}
            >
              <Poster source={{ uri: getImageUrl(v.poster_path) }} />
            </Animated.View>
          );
        } else if (idx === topIndex + 1) {
          return (
            <Animated.View
              key={v.id}
              {...panResponder.panHandlers}
              style={{
                ...styles,
                zIndex: -idx,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
            >
              <Poster source={{ uri: getImageUrl(v.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={v.id}
              {...panResponder.panHandlers}
              style={{ ...styles, zIndex: -idx, opacity: 0 }}
            >
              <Poster source={{ uri: getImageUrl(v.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};

export default FavsPresenter;
