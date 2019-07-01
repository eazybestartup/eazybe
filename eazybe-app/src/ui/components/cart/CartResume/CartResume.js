import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartResume = ({ totalPrice }) => (
  <View style={styles.productsList}>
    <Text style={styles.txtResumo}>Resumo do Pedido</Text>
    <View styles={styles.vwResumePrice}>
      <Text styles={styles.fontValue}>Valor da compra R${totalPrice}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  productsList: {
    flex: 2,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 20,
  },
  txtResumo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  fontValue: {
    fontSize: 18,
  }
});

export default CartResume;
