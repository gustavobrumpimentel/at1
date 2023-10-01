import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Nome do Aplicativo: Meu App</Text>
      <Text style={styles.heading}>Versão: 1.0.0</Text>
      <Text style={styles.heading}>Desenvolvido por: Gustavo Pimentel</Text>
      <Text style={styles.heading}>Descrição: Um aplicativo que apresenta uma lista de produtos.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default AppInfoScreen;
