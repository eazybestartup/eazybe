import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalItemPrice = props => (
  <View style={styles.productPriceBox}>
    <Text style={styles.bottomProductPrice}>Total: 
      <Text style={styles.productPrice}> R$ {props.itemPrice} </Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  productPriceBox: {
    flex: 2,
    alignItems: 'center',
    marginTop: 5,
  },
  bottomProductPrice: {
    paddingTop: 10,
    fontSize: 22
  },
  productPrice: {
    fontWeight: 'bold'
  },
});

export default TotalItemPrice;
