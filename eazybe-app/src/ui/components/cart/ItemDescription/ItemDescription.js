import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class ItemDescription extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      imageUrl: props.imageUrl,
      itemDescription: props.itemDescription,
      itemHasLongName: false,
      itemPrice: props.itemPrice,
      userShowFullItemName: false,
    };
  }

  componentDidMount() {
    const { itemDescription } = this.state;
    if (!itemDescription) return;
    if (itemDescription.length < 25) {
      this.setState({ 
        itemHasLongName: true,
      });
    }
  }

  getAbreviateNameFromItem() {
    const { itemDescription } = this.state;
    if (!itemDescription) return;
    if (itemDescription.length < 25) {
      return itemDescription;
    }
    return itemDescription.slice(0, 25) + '...';
  }

  showFullItemName() {
    const { itemDescription } = this.state;
    if (!itemDescription || itemDescription.length < 25) return;
    this.setState({ userShowFullItemName: !this.state.userShowFullItemName });
  }

  render() {
    const { userShowFullItemName, itemDescription, itemPrice } = this.state;
    const arrowIcon = userShowFullItemName ? 'arrow-drop-down' : 'arrow-drop-up';
    const itemName = userShowFullItemName ? itemDescription : this.getAbreviateNameFromItem();
    return (
      <View style={styles.topProductsList}>
        <Image style={styles.productImage} source={{ uri: this.state.imageUrl || skolBeats }} />
        <View style={styles.txtTop}>
          <Text style={styles.productDescription}>{itemName}</Text>
            {
              userShowFullItemName ? 
              <Text style={styles.productUnityValue}>Valor unitário R$ {itemPrice}</Text>
              : null
            }
        </View>
        <View style={styles.iconArrowDropDownCircle}>
          <Icon name={arrowIcon} size={30} color='#88B04B' onPress={() => this.showFullItemName()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topProductsList: {
    flexDirection: 'row',
    paddingTop: 10
  },
  productImage: {
    width: 60,
    height: 60,
    paddingTop: 10,
  },
  productDescription: {
    flex: 7,
    fontSize: 18,
    paddingTop: 10,
    color: '#2d3436',
  },
  iconArrowDropDownCircle: {
    flex: 1,
    height: '100%',
    paddingTop: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  productUnityValue: {
    flexDirection:'column',
    paddingTop: 0,
    marginTop: 0,
  },
  txtTop: {
    flex: 7,
  }
});

export default ItemDescription;
