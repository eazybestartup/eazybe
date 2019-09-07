import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import getText from '../../../enums/dictionary/dictionary'
import {styles} from './styles'
import { connect } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler';
import UserAddress from '../../../models/UserAddress';

export class InfoUser extends Component {
  constructor() {
    super()
    this.getAddress = this.getAddress.bind(this)
  }

  getAddress() {
    const { user } = this.props;
    const { neighborhood, city, state } = user.district
    return UserAddress.beautifyUserAddress(user.street, neighborhood, city, state)
  }

  render(){
    return (
      <View style={styles.userInfo}>
        <Text style={styles.txtDados}>{getText('register:label:dadosUser')}</Text>
        <View style={styles.infoEnd_email}>
          <Image source={require('../../../assets/Perfil/Icones/Placa.png')} style={styles.imgEnd}></Image>
          <View style={styles.infoEndUser}>
            <TextInput multiline={true} editable={false} style={styles.txtEnd} value={this.getAddress()}></TextInput>
          </View>
        </View>
        <View style={styles.infoEnd_email}>
          <Image source={require('../../../assets/Perfil/Icones/email.png')} style={styles.imgMail}></Image>
          <TextInput editable={false} style={styles.txtEnd} value={this.props.user.email}></TextInput>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer
})
  
const InfoUserConnect = connect(mapStateToProps)(InfoUser);
  
export default InfoUserConnect;
