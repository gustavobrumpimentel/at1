import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Specifications = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.specs}>{product.specifications}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  specs: {
    fontSize: 16,
  },
});

export default Specifications;