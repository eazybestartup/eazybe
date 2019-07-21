import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import getText from '../../../enums/dictionary/dictionary'
import {styles} from './styles'
import colors from '../../colors/colors.enum'

export default class InfoUser extends Component{
    render(){
        return(
            <View style={styles.userInfo}>
                <Text style={styles.txtDados}>{getText('register:label:dadosUser')}</Text>
                <View style={styles.infoEnd_email}>
                    <Image source={require('../../../assets/Perfil/Icones/Placa.png')} style={styles.imgEnd}></Image>
                    <Text style={styles.txtEnd}>Endereço do usuario</Text>
                </View>
                <View style={styles.infoEnd_email}>
                    <Image source={require('../../../assets/Perfil/Icones/email.png')} style={styles.imgEnd}></Image>
                    <Text style={styles.txtEnd}>E-mail do usuario</Text>
                </View>
                <Button primary style={styles.bntEdit}>
                    <Text style={styles.bntTxtEditar}>{getText('register:btn:editarDados')}</Text>
                </Button>
            </View>
        );
    }
}