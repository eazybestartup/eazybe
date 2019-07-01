import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CartPriceTop = props => (
  <View style={styles.vwPrice}>
    <Text style={styles.txtPriceTop}>R$ {props.fretePrice}</Text>
  </View>
);

const styles = StyleSheet.create({
  vwPrice: {
    height: '95%',
    justifyContent: 'center',
    borderLeftColor: '#fff',
    borderLeftWidth: 2,
    paddingLeft: 15,
  },
  txtPriceTop: {
    color: '#fff',
    fontSize: 22,
    marginRight: 10
  },
  txtFrete: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginRight: 10
  }
});

export default CartPriceTop;
