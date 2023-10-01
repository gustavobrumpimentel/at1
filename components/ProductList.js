import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductList = ({ products, onPress }) => {

  return (
    <View style={styles.container}>
      {products.map(product => (
        <TouchableOpacity key={product.id} onPress={() => onPress(product)} style={styles.productItem}>
          <Text style={styles.productName}>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  productItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontWeight: 'bold',
  },
});

export default ProductList;
