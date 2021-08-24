import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Text = styled.Text`
  color: white;
  margin-left: 12px;
`;

const Link = ({ onPress, icon, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Content>
        <FontAwesome name={icon} color={'white'} size={20} />
        <Text>{text}</Text>
      </Content>
    </TouchableOpacity>
  );
};

export default Link;
