import React, { Component } from 'react';
import { View, Stylesheet } from 'react-native';
import ImgPerfil from '../components/Perfil/imgPerfil';
import { Container, Content, Form, Button, Text } from 'native-base';
import colors from '../colors/colors.enum';
import InputWithLabel from '../components/register/InputWithLabel/InputWithLabel';
import ErrorMessage from '../components/register/ErrorMessage/ErrorMessage';
import getText from '../../enums/dictionary/dictionary';
import { connect } from 'react-redux';
import { setEmail, setErrorMessage } from '../../state/User/user.actions';
import { isEmailValid } from '../../utils/validate';


const styles = {
  flex1: { flex: 1, backgroundColor: colors.bgContent },
  flex4: { flex: 4 },
  flex6: { flex: 6, marginTop: 45, backgroundColor: colors.bgdadosUser },
  bntSalvar: {
    alignSelf: 'center',
    marginBottom: 10,
    height: 60,
    width: 110,
    borderRadius: 5,
    backgroundColor: '#909A8A',
  },
  txtSalvar:{
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 35,
    textAlign: 'right',
  },
  errorMessage: {
    marginLeft:15,
    marginBottom: 15,
    color: 'red',
    fontWeight: 'bold'
  }
}

export default class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.navigateToUser = this.navigateToUser.bind(this);
  }

  static navigationOptions = {
    //headerLeft: null,
    //title: 'Usuário',
  }

  navigateToUser = () => {
    const { email } = this.props.user;
    const emailValid = isEmailValid(email);

    if(emailValid) {
      this.props.setErrorMessage('');
      return this.props.navigation.navigate('User');
    }

    if(!emailValid) {
      return this.props.setErrorMessage(getText('register:label:invalid-email'));
    }
  }

  render() {
    const { user, errorMessage } = this.props;
    return (
      <Container style={styles.flex1}>
        <Content>
          <Form>
            <View>
              <ImgPerfil></ImgPerfil>
            </View>
            <View style={styles.flex6}>
              <InputWithLabel label='register:label:email' placeholder='register:placeholder:email' onChangeText={email => this.props.setEmail(email)}/>
              <InputWithLabel label='register:label:cep' placeholder='register:placeholder:cep' keyboardType='numeric' maxLength={8}/>
              <InputWithLabel label='register:label:address'  disabled={true}/>
              <InputWithLabel label='register:label:district'  disabled={true}/>
              <InputWithLabel label='register:label:cityAndUf' disabled={true}/>
              <InputWithLabel label='register:label:number'/>
              <InputWithLabel label='register:label:complement'/>
              <ErrorMessage message={errorMessage}/>
              <Button primary style={styles.bntSalvar} onPress={this.navigateToUser}>
                <Text style={styles.txtSalvar}>{getText('register:btn:salvarDados')}</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapState = state => ({
  user: state.userReducer
})

const mapDispatch = dispatch => {
  return {
    setEmail: (email) => dispatch(setEmail(email)),
    setErrorMessage: (errorMessage) => dispatch(setErrorMessage(errorMessage)),
  }
}

export const UsuarioConnected = connect(mapState, mapDispatch)(Usuario);