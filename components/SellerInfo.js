import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SellerInfo = ({ seller }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seller Information</Text>
      <Text style={styles.info}>Name: {seller.name}</Text>
      <Text style={styles.info}>Phone: {seller.phone}</Text>
      <Text style={styles.info}>Email: {seller.email}</Text>
      <Text style={styles.info}>Rating: {seller.rating}</Text>
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
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SellerInfo;
