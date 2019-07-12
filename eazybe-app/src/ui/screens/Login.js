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
                        <Input placeholder= "E-mail"/>
                    </Item>
                    <Item style={styles.EmailPass}>
                        <Input placeholder="Password"/>
                    </Item>
                    <Button style={styles.botao} success>
                        <Text>Login</Text>
                    </Button>
                    <Button style={styles.botao} success>
                        <Text>Cadastre-se</Text>
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
        borderRadius: 10
    },
    EmailPass:{
        marginTop: 10,
        marginEnd: 40,
        marginLeft: 40,
        borderColor: "#A29AD0",
        borderRightColor: "#000000",
    },
    botao:{
        backgroundColor: "#FFFFFF",
        width: 330,
        height: 50,
        marginTop: 20,
        marginLeft:40    
    },
    bgImagem:{
        marginTop: 25,
        width: null,
        height: 125
    }
});