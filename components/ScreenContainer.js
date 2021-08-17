import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const ScreenContainer = ({ loading, children }) => {
  return (
    <ScrollView
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        flex: loading ? 1 : 'auto',
        justifyContent: loading ? 'center' : 'flex-start',
      }}
    >
      {loading ? <ActivityIndicator /> : children}
    </ScrollView>
  );
};

ScreenContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScreenContainer;
