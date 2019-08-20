import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import getText from '../../../enums/dictionary/dictionary'
import {styles} from './styles'
import { connect } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler';

export class InfoUser extends Component{
    render(){
        return(
            <View style={styles.userInfo}>
                <Text style={styles.txtDados}>{getText('register:label:dadosUser')}</Text>
                <View style={styles.infoEnd_email}>
                    <Image source={require('../../../assets/Perfil/Icones/Placa.png')} style={styles.imgEnd}></Image>
                    <View style={styles.infoEndUser}>
                        <TextInput multiline={true} editable={false} style={styles.txtEnd} value={this.props.rua + this.props.num + this.props.complemento + this.props.bairro + this.props.cidade + this.props.estado}></TextInput>
                    </View>
                </View>
                <View style={styles.infoEnd_email}>
                    <Image source={require('../../../assets/Perfil/Icones/email.png')} style={styles.imgMail}></Image>
                    <TextInput editable={false} style={styles.txtEnd} value={this.props.mail}></TextInput>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      nome:state.userReducer.nome,
      rua:state.userReducer.rua,
      num:state.userReducer.num,
      complemento:state.userReducer.complemento,
      bairro:state.userReducer.bairro,
      cidade:state.userReducer.cidade,
      estado:state.userReducer.estado,
      mail:state.userReducer.mail,
    };
  };
  
  const InfoUserConnect = connect(mapStateToProps)(InfoUser);
  
export default InfoUserConnect;