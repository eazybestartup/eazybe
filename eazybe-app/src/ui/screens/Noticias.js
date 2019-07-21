import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { TabNavigatorConnect } from '../../navigator/TabNavigator/TabNavigator'
import colors from '../colors/colors.enum'

const styles = {
  flex1: { flex: 1, backgroundColor: colors.bgContent },
  flex10: { flex: 10 }
}

export default class Noticias extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    headerLeft: null,
    title: 'Notícias'
  }

  componentDidMount() {
    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.flex1}>
        <View style={styles.flex10}>
          <Text> Noticias </Text>
        </View>
        <View style={styles.flex1}>
          <TabNavigatorConnect />
        </View>
      </View>
    );
  }
}
