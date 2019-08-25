import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigatorConnect } from '../../navigator/TabNavigator/TabNavigator';
import colors from '../colors/colors.enum';
import ImgPerfil from '../components/Perfil/imgPerfil';
import InfoUser from '../components/Perfil/infoUser';
import { Button } from 'native-base';
import getText from '../../enums/dictionary/dictionary'

const styles = {
  flex1: { flex: 1, backgroundColor: colors.bgContent },
  flex4: { flex: 4 },
  flex6: { flex: 6 }
}

export default class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.navigateToEditUser = this.navigateToeditUser.bind(this);
  }

  static navigationOptions = {
    headerLeft: null,
    title: 'Usuário'
  }

  navigateToeditUser = () => {
    return this.props.navigation.navigate('editUser')
  }

  render() {
    return (
      <View style={styles.flex1}>
        <View style={styles.flex4}>
          <ImgPerfil></ImgPerfil>
        </View>
        <View style={styles.flex6}>
          <InfoUser></InfoUser>
          <Button primary style={estilo.bntEdit} onPress={this.navigateToEditUser}>
            <Text style={estilo.bntTxtEditar}>{getText('register:btn:editarDados')}</Text>
          </Button>
        </View>
        <View style={styles.flex1}>
          <TabNavigatorConnect />
        </View>
      </View>
    );
  }
}
const estilo = StyleSheet.create({
  bntEdit: {
    width: 109,
    height:30,
    position: 'absolute',
    marginTop: 210,
    marginLeft: 285
  },
  bntTxtEditar:{
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 35
  },
});