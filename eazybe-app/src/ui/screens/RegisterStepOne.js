import React, { Component } from 'react';
import { Container, Content, Form, Button, Text } from 'native-base';
import { View, StyleSheet } from 'react-native'
import InputWithLabel from '../../ui/components/register/InputWithLabel/InputWithLabel';
import EazyBeDatePicker from '../../ui/components/register/EazyBeDatePicker/EazyBeDatePicker';
import EazyBePicker from '../../ui/components/register/EazyBePicker/EazyBePicker';
import ErrorMessage from '../../ui/components/register/ErrorMessage/ErrorMessage';
import colors from '../colors/colors.enum';
import getText from '../../enums/dictionary/dictionary';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import {
  setName,
  setBirthDate,
  setSex,
  setEmail,
  setPassword,
  setConfirmationPassword,
  setErrorMessage
} from '../../state/register/register.actions';
import { isEmailValid, equalsPassword, minLenPassword, minLenUsername } from '../../utils/validate'

const styles = StyleSheet.create({
  container: { backgroundColor: colors.purpleBackground },
  vwPickers: { flexDirection: 'row' },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  alignSelfCenter: { alignSelf:'center' },
  errorMessage: {
    marginLeft:15,
    marginBottom: 15,
    color: 'red',
    fontWeight: 'bold'
  }
})

class RegisterStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.navigateToStepTwo = this.navigateToStepTwo.bind(this);
  }

  static navigationOptions = {
    title: getText('register:title:navigation:stepOne')
  }

  navigateToStepTwo = () => {
    const { name, email, password, confirmationPassword, birthDate, userSex } = this.props.register;
    const emailValid = isEmailValid(email);
    const isPasswordEquals = equalsPassword(password, confirmationPassword);
    const isPasswordBigEnough = minLenPassword(password);
    const isNameBigEnough = minLenUsername(name);
    
    if(emailValid && isPasswordEquals && isPasswordBigEnough && isNameBigEnough && birthDate && userSex) {
      this.props.setErrorMessage('');
      return this.props.navigation.navigate('RegisterStepTwoConnected');
    }

    if(!birthDate) {
      return this.props.setErrorMessage(getText('register:label:invalid-birthDate'));
    }

    if(!userSex) {
      return this.props.setErrorMessage(getText('register:label:invalid-userSex'));
    }

    if(!isNameBigEnough) {
      return this.props.setErrorMessage(getText('register:label:invalid-name'));
    }

    if(!emailValid) {
      return this.props.setErrorMessage(getText('register:label:invalid-email'));
    }

    if(!isPasswordBigEnough) {
      return this.props.setErrorMessage(getText('register:label:min-len-password'));
    }

    if(!isPasswordEquals) {
      return this.props.setErrorMessage(getText('register:label:not-equal-password'));
    }
  }

  render() {
    const { register } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <InputWithLabel label='register:label:name' onChangeText={name => this.props.setName(name)} placeholder='register:placeholder:name'/>
            <View style={styles.vwPickers}>
              <View style={styles.flex2}>
                <EazyBeDatePicker label='register:label:birthDate' onDateChange={date => this.props.setBirthDate(date)} />
              </View>
              <View style={styles.flex3}>
                <EazyBePicker label='register:label:sex' values={register.sexOptions} selectedValue={this.props.register.userSex} onValueChange={sex => this.props.setSex(sex)} />
              </View>
            </View>
            <InputWithLabel label='register:label:email' placeholder='register:placeholder:email' onChangeText={email => this.props.setEmail(email)}/>
            <InputWithLabel label='register:label:password' placeholder='register:placeholder:password' secureTextEntry={true} onChangeText={password => this.props.setPassword(password)}/>
            <InputWithLabel
              label='register:label:password-confirmation'
              placeholder='register:placeholder:password-confirmation'
              secureTextEntry={true}
              onChangeText={password => this.props.setConfirmationPassword(password)} />
            <ErrorMessage message={this.props.register.errorMessage} />
            <View style={styles.flex1}>
              <Button primary style={styles.alignSelfCenter} onPress={this.navigateToStepTwo}>
                <Text> {getText('register:btn:avancar')}</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapState = state => ({
  register: state.registerReducer
})

const mapDispatch = dispatch => {
  return {
    setName: (name) => dispatch(setName(name)),
    setBirthDate: (birthDate) => dispatch(setBirthDate(birthDate)),
    setSex: (sex) => dispatch(setSex(sex)),
    setEmail: (email) => dispatch(setEmail(email)),
    setPassword: (password) => dispatch(setPassword(password)),
    setConfirmationPassword: (confirmationPassword) => dispatch(setConfirmationPassword(confirmationPassword)),
    setErrorMessage: (errorMessage) => dispatch(setErrorMessage(errorMessage)),
  }
}

export const RegisterStepOneConnected = connect(mapState, mapDispatch)(RegisterStepOne);
