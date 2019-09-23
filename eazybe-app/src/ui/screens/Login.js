import React, { Component } from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import { Container, Content, Button, Spinner } from 'native-base';
import InputWithLabel from '../components/register/InputWithLabel/InputWithLabel';
import colors from '../colors/colors.enum';
import getText from '../../enums/dictionary/dictionary';
import { connect } from 'react-redux';
import { authenticate } from '../../state/register/register.actions'
import Reactotron from 'reactotron-react-native';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: '',
        };
        this.navigateToNoticias = this.navigateTonoticias.bind(this);
        this.authUser = this.authUser.bind(this);
    }
    static navigationOptions = {
        header: null
    }

    navigateTonoticias = () => {
        return this.props.navigation.navigate('TabNavigatorConnect')
    }

    setEmail = email => this.setState({ email });

    setPassword = password => this.setState({ password });

    authUser = () => {
      this.props.authenticate({
        email: this.state.email,
        password: this.state.password
      })
    }

    render(){
        const { register } = this.props;
        return(
            <Container style={styles.container}>
                <Content>
                <Image source={require('../../assets/Login/logo.png')} style={styles.bgImagem} />
                    <View style = {styles.flex2}>
                        <InputWithLabel onChangeText={email => this.setEmail(email)} label='register:label:email' placeholder='register:placeholder:email'/>
                        <InputWithLabel secureTextEntry={true} onChangeText={password => this.setPassword(password)} label='register:label:password' placeholder='register:placeholder:password'/>
                        {register.loading ? <Spinner color='yellow' /> : 
                        <View style = {styles.flex3}>
                            <Text style={styles.errorMessage}></Text>
                            <Button style={styles.alignSelfCenter1} success onPress={this.authUser}>
                                <Text style={styles.txtLogin}>{getText('register:btn:login')}</Text>
                            </Button>
                            <Button style={styles.alignSelfCenter2} success onPress={() => this.props.navigation.navigate('RegisterStepOneConnected')}>
                                <Text style={styles.txtCadastrar} >{getText('register:btn:cadastre-se')}</Text>
                            </Button>
                        </View>}
                    </View>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: { 
        display: 'flex',
        flex:1, 
        backgroundColor: colors.purpleBackground,
    },
    vwPickers: { flexDirection: 'row' },
    flex2: { 
        flex: 2,
        paddingLeft: 25,
    },
    flex10: { flex: 10, borderWidth: 1, alignItems: 'center', height: '100%' }, 
    flex3: { flex: 3 },
    alignSelfCenter1: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf:'center',
        width: 200, 
        height: 50,
        backgroundColor: colors.white,
        fontFamily: 'Comfortaa'
     },
     alignSelfCenter2: { 
        display: 'flex',
        justifyContent: 'center',
        alignSelf:'center', 
        width: 200, 
        height: 50,
        backgroundColor: colors.navyBlue,
        marginTop: 10,
        marginBottom:25,
        fontFamily: 'Comfortaa'
     },
    errorMessage: {
      color: colors.yellow,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Comfortaa'
    },
    bgImagem:{
        alignSelf: 'center',
        width: 200,
        height: 300,
        resizeMode: 'stretch'
    },
    txtLogin:{
        color: colors.navyBlue,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Comfortaa'
    },
    txtCadastrar:{
        color: colors.white,
        fontSize: 20,
        fontFamily: 'Comfortaa'
    }
  });

  const mapState = state => ({ 
    register: state.registerReducer
  })
  const mapDispatch = dispatch => {
    return {
      authenticate: user => dispatch(authenticate(user)),
    }
  }

  export const LoginConnected = connect(mapState, mapDispatch)(Login);
