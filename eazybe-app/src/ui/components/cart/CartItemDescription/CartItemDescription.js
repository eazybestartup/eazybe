import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import AdjustQuantity from '../AdjustQuantity/AdjustQuantity';
import TotalItemPrice from '../TotalItemPrice/TotalItemPrice';
import ItemDescription from '../ItemDescription/ItemDescription';
import { addItem, removeItem } from '../../../../state/cart/cart.actions';

const CartItemDescription = props => (
  <View style={styles.container}>
    <Text style={styles.txtCategory}>{props.category}</Text>
    <View style={styles.productsList}>
      <ItemDescription
        imageUrl={props.imageUrl}
        itemDescription={props.name}
        itemPrice={props.price}
      />
      <View style={styles.bottomProductsList}>
        <TotalItemPrice itemPrice={props.price} />
        <AdjustQuantity
          quantity={props.quantity}
          productId={props.id}
          onPlus={props.onPlus}
          onMinus={props.onMinus}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flex: 2
  },
  txtCategory: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d3436',
    marginLeft: 20,
  },
  productsList: {
    flex: 1,
    justifyContent: 'flex-start',
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  bottomProductsList: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    onPlus: (id) => dispatch(addItem(id)),
    onMinus: (id) => dispatch(removeItem(id)),
  }
};

export default connect(null, mapDispatchToProps)(CartItemDescription);
