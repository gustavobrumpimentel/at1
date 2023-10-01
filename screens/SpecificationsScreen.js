import React from 'react';
import { View } from 'react-native';
import Specifications from '../components/Specifications';

const SpecificationsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View>
      <Specifications product={product} />
    </View>
  );
};

export default SpecificationsScreen;
