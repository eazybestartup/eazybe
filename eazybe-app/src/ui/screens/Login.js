import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
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
                    <View>
                       <Text style = {styles.textoLogo1}>Eazybe</Text>
                    </View>
                    <View>
                        <Text style = {styles.textoLogo2}>O seu bairro em um toque</Text>
                    </View>
                    <ImageBackground source={require('../../assets/Login/logotipo.png')} style={styles.bgImagem}></ImageBackground>
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
        flex:1, 
        backgroundColor: colors.purpleBackground 
    },
    vwPickers: { flexDirection: 'row' },
    flex2: { 
        flex: 2,
        paddingLeft: 25,
        backgroundColor: colors.purpleBackgroundLight,
        marginTop: 20,
        elevation: 10,
        borderWidth: 2,
        borderColor: colors.purpleBackgroundBorder,
        borderRadius: 6 },
    flex3: { flex: 3 },
    alignSelfCenter1: { 
        alignSelf:'center', 
        width: 200, 
        height: 50,
        backgroundColor: colors.white,
        marginTop: 20,
     },
     alignSelfCenter2: { 
        alignSelf:'center', 
        width: 200, 
        height: 50,
        backgroundColor: colors.navyBlue,
        marginTop: 10,
        marginBottom:25
     },
    errorMessage: {
      color: colors.yellow,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    textoLogo1:{
        flex:2,
        fontSize: 48,
        color: colors.white,
        marginTop: 15,
        textAlign:'center',
        textShadowColor: colors.black,
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3.84        
    },
    textoLogo2:{
        flex:3,
        fontSize: 20,
        color: colors.Logo,
        marginTop: 2,
        textAlign:'center',
        textShadowColor: colors.black,
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3.84 
    },
    bgImagem:{
        marginTop: 25,
        width: null,
        height: 125
    },
    txtLogin:{
        color: colors.navyBlue,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft:73
    },
    txtCadastrar:{
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft:50
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
