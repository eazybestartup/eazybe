import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { TabNavigatorConnect } from '../../navigator/TabNavigator/TabNavigator'

const styles = {
  flex1: { flex: 1 },
  flex10: { flex: 10 }
}

export default class Usuário extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    headerLeft: null,
    title: 'Usuário'
  }

  render() {
    return (
      <View style={styles.flex1}>
        <View style={styles.flex10}>
          <Text> Usuário </Text>
        </View>
        <View style={styles.flex1}>
          <TabNavigatorConnect />
        </View>
      </View>
    );
  }
}
