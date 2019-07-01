import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from '../ui/components/cart/ListItem/ListItem';

class Products extends React.Component {
  state = {
    productName: "",
    products: []
  };

  productNameChangedHandler = val => {
    this.setState({
      productName: val
    });
  };

  productSubmitHandler = () => {
    if (this.state.productName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        products: prevState.products.concat(prevState.productName)
      };
    });
  };

  render() {
    const productsOutput = this.state.products.map((product, i) => (
      <ListItem key={i} productName={product} />
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome ScanGoPOC</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ width: 300 }}
            placeholder="Find a Product"
            value={this.state.productName}
            onChangeText={this.productNameChangedHandler}
          />
          <Button
            title="Add"
            style={styles.productButton}
            onPress={this.productSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{productsOutput}</View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});


export default Products;
