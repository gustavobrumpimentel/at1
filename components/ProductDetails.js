import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetails = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
});

export default ProductDetails;
