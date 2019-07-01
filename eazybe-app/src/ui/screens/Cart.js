import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getInitialPrice, clearCart } from '../../state/cart/cart.actions';
import { Button } from '../components/cart/Button/Button';
import CartPriceTop from '../components/cart/CartPriceTop/CartPriceTop';
import ItemCountAndClearCart from '../components/cart/ItemCountAndClearCart/ItemCountAndClearCart';
import CartItemDescription from '../components/cart/CartItemDescription/CartItemDescription';
import CartResume from '../components/cart/CartResume/CartResume';
import EmptyCart from '../components/cart/EmptyCart/EmptyCart';

const sumAllProp = (array, prop) => {
  return array.reduce((acc, p) => acc + p[prop], 0);
}

class Cart extends Component {
  
  componentDidMount() {
    this.props.initialPrice();
  }

  componentDidUpdate() {
    this.props.initialPrice();
  }

  render() {
    const { products, totalPrice, clearCart } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <CartPriceTop 
            fretePrice={totalPrice} />
        </View>
        <View style={styles.middle}>
          <ItemCountAndClearCart 
            qtdItens={sumAllProp(products, 'quantity')}
            clearCart={clearCart}
            />
            {
              products.length ? 
              (
                <ScrollView style={styles.scrollView}>
                  {products.map(product => (
                    <CartItemDescription
                      key={product.id}
                      {...product}
                    />
                  ))}
                </ScrollView>
              ) : 
              (
                <EmptyCart />
              )
            }
          <View style={styles.cartResume}>
            {products.length ? <CartResume totalPrice={totalPrice} /> : null}
          </View>
        </View>
        <View style={styles.bottom}>
          <Button text="Continuar" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2d3436',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  middle: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: '#dfe6e9',
  },
  cartResume: {
    flex: 3,
    marginTop: 30,
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#dfe6e9',
    padding: 20,
  },
  scrollView: { height: '60%' }
});

const mapStateToProps = (state) => ({
  products: state.cartReducer.products,
  totalPrice: state.cartReducer.totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  initialPrice: () => dispatch(getInitialPrice()),
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
