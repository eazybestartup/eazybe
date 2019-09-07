import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import getText from '../../../enums/dictionary/dictionary'
import {styles} from './styles'
import { connect } from 'react-redux'
import { TextInput } from 'react-native-gesture-handler';

export class ImgPefil extends Component{
    render(){
        return(
            <View style={styles.areaImgPerfil}>
                <Button success bordered style={styles.alignSelfEnd}>
                    <Text style={styles.txtImgPerfil}>{getText('register:btn:editarImagem')}</Text>
                    <Image source={require('../../../assets/Perfil/Icones/photo-camera.png')} style={styles.iconeCam}></Image>
                </Button>
                <View style={styles.alignSelfCenter}>
                    <Image source={require('../../../assets/Perfil/Avatares/AvatarMasculino4.png')} style={styles.bgImage}></Image>
                    <TextInput style={styles.txtUserPerfil} value={this.props.user.full_name}></TextInput>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
  user: state.userReducer
})
  
const ImgPerfilConnect = connect(mapStateToProps)(ImgPefil);
  
export default ImgPerfilConnect;
