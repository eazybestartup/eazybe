import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { TabNavigatorConnect } from '../../navigator/TabNavigator/TabNavigator';
import colors from '../colors/colors.enum';
import ImgPerfil from '../components/Perfil/img-perfil.component';
import InfoEditUser from '../components/Perfil/info-edit-user.component';

const styles = {
  flex1: { flex: 1, backgroundColor: colors.bgContent },
  //flex4: { flex: 4 },
  //flex6: { flex: 6 },
}

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    //headerLeft: null,
    //title: 'Usuário',
  }

  render() {
    return (
      <View style={styles.flex1}>
        <View>
          <ImgPerfil></ImgPerfil>
        </View>
        <View>
          <InfoEditUser></InfoEditUser>
        </View>
        
      </View>
    );
  }
}
