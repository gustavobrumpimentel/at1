import React from 'react';
import { View } from 'react-native';
import ProductList from '../components/ProductList';
import data from '../data';

const ProductListScreen = ({ navigation }) => {

  const products = data.products
  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View>
      <ProductList products={products} onPress={handleProductPress} />
    </View>
  );
};

export default ProductListScreen;
