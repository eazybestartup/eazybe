import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyCart = () => (
  <View styles={styles.container}>
    <Text styles={styles.font}>Não há itens no seu carrinho! :(</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff0000'
  },
  font: {
    fontSize: 28,
    color: '#ff0000'
  }
})

export default EmptyCart;
