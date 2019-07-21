import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { TabNavigatorConnect } from '../../navigator/TabNavigator/TabNavigator'
import colors from '../colors/colors.enum'
import ImgPerfil from '../components/Perfil/imgPerfil'
import InfoUser from '../components/Perfil/infoUser'

const styles = {
  flex1: { flex: 1, backgroundColor: colors.bgContent },
  flex4: { flex: 4 },
  flex6: { flex: 6 },
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
        <View style={styles.flex4}>
          <ImgPerfil></ImgPerfil>
        </View>
        <View style={styles.flex6}>
          <InfoUser></InfoUser>
        </View>
        <View style={styles.flex1}>
          <TabNavigatorConnect />
        </View>
      </View>
    );
  }
}
