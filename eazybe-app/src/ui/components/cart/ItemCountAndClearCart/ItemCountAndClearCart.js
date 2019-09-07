import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const ItemCountAndClearCart = ({ qtdItens, clearCart }) => (
  <View style={styles.vwItemsAndClearCart}>
    <Text style={styles.txtItems}>{qtdItens} {qtdItens > 1 ? 'itens' : 'item'}</Text>
    <TouchableHighlight 
      onPress={() => clearCart()}
    >
      <Text style={styles.txtClearCart}>Esvaziar Carrinho</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  vwItemsAndClearCart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    paddingTop: 20,
  },
  txtItems: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d3436'
  },
  txtClearCart: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#88B04B'
  },
});

export default ItemCountAndClearCart;
