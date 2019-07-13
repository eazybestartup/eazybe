import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { Container, Content, Form, Item, Input, Button } from 'native-base';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    static navigationOptions = {
        title: 'Login',
        header: null
    }
    render(){
        return(
            <View style={styles.Area}>
                <Text style = {styles.textoLogo1}>Eazybe</Text>
                <Text style = {styles.textoLogo2}>O seu bairro em um toque</Text>
                <ImageBackground source={require('../../assets/Login/logotipo.png')} style={styles.bgImagem}></ImageBackground>
                <View style={styles.loginArea}>
                    <Item style={styles.EmailPass}>
                        <Input placeholder= "E-mail" placeholderTextColor='#FFFFFF'/>
                    </Item>
                    <Item style={styles.EmailPass}>
                        <Input placeholder="Password" placeholderTextColor='#FFFFFF'/>
                    </Item>
                    <Button style={styles.bntLogin} success onPress={() => this.props.navigation.navigate('Feed')}>
                        <Text style={styles.txtLogin}>Login</Text>
                    </Button>
                    <Button style={styles.bntCadastrar} success onPress={() => this.props.navigation.navigate('Cadastro1')}>
                        <Text style={styles.txtCadastrar}>Cadastre-se</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Area:{
        flex: 1,
        backgroundColor: "#7669C8",
        height: 300
    },
    textoLogo1:{
        fontSize: 48,
        color: "#FFFFFF",
        marginTop: 15,
        textAlign:'center'
    },
    textoLogo2:{
        fontSize: 20,
        color: "#C4C4C4",
        marginTop: 2,
        textAlign:'center'
    },
    loginArea:{
        flex: 1,
        backgroundColor: "#7A6FBC",
        marginTop: 80,
        elevation: 10,
        borderWidth: 2,
        borderColor: "#8276CA",
        borderRadius: 6,
        alignItems: 'center'
    },
    EmailPass:{
        marginTop: 10,
        marginEnd: 40,
        marginLeft: 40,
        borderColor: "#A29AD0",
        borderRightColor: "#000000",
    },
    bntLogin:{
        backgroundColor: "#CCCCCC",
        width: 330,
        height: 50,
        marginTop: 20,
        marginLeft:40,
        elevation: 5
    },
    bntCadastrar:{
        backgroundColor: "#3221A1",
        width: 330,
        height: 50,
        marginTop: 20,
        marginLeft:40,
        elevation: 5,
    },
    bgImagem:{
        marginTop: 25,
        width: null,
        height: 125
    },
    txtLogin:{
        color: "#000000",
        fontSize: 20,
        paddingStart: 130
    },
    txtCadastrar:{
        color: "#FFFFFF",
        fontSize: 20,
        paddingStart: 105
    }
});