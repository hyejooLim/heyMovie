import React from 'react';
import { ScrollView } from 'react-native';

import Title from './Title';

const HorizontalSlider = ({ title, children }) => {
  return (
    <>
      <Title title={title} />
      <ScrollView
        style={{ marginBottom: 45, marginLeft: 30 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </>
  );
};

export default HorizontalSlider;
