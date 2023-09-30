import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ProductListItem = ({ product, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
        <Text>{product.name}</Text>
        <Text>{product.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductListItem;
