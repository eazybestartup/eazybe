import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AdjustQuantity = ({ quantity, productId, onMinus, onPlus }) => (
  <View style={styles.adjustQuantity}>
    <TouchableOpacity style={styles.btnMinusAdjustQuantity} onPress={() => onMinus(productId)}>
      <Text style={styles.lblButton}>-</Text>
    </TouchableOpacity>
    <Text style={styles.txtQuantityItem}>{quantity}</Text>
    <TouchableOpacity style={styles.btnPlusAdjustQuantity} onPress={() => onPlus(productId)}>
      <Text style={styles.lblButton}>+</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  adjustQuantity: {
    height: '60%',
    flex: 1, 
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#b2bec3',
    marginBottom: 10,
    marginRight: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnPlusAdjustQuantity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnMinusAdjustQuantity:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtQuantityItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    fontSize: 24,
    fontWeight: 'bold',
  },
  lblButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#88B04B'
  }
});

export default AdjustQuantity;
