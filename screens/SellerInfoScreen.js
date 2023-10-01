import React from 'react';
import { View } from 'react-native';
import SellerInfo from '../components/SellerInfo';

const SellerInfoScreen = ({ route }) => {
  const { seller } = route.params;

  return (
    <View>
      <SellerInfo seller={seller} />
    </View>
  );
};

export default SellerInfoScreen;
