import React, { Component } from 'react';
import { Container, Content, Form, Button, Text, Spinner } from 'native-base';
import { View, StyleSheet } from 'react-native'
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import InputWithLabel from '../../ui/components/register/InputWithLabel/InputWithLabel';
import colors from '../colors/colors.enum'
import getText from '../../enums/dictionary/dictionary';
import {
  setCep,
  setUserAddress,
  setLoading,
  setErrorMessage,
  setInvalidCep,
  registerUser,
  fetchCep
} from '../../state/register/register.actions';
import { urls } from '../../services/_base/urls';
import UserAddress from '../../models/UserAddress'
import reactotron from 'reactotron-react-native';

const styles = StyleSheet.create({
  container: { backgroundColor: colors.purpleBackground },
  vwPickers: { flexDirection: 'row' },
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  alignSelfCenter: { alignSelf:'center' }
})

class RegisterStepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.setCepAndCallApi = this.setCepAndCallApi.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  static navigationOptions = {
    title: getText('register:title:navigation:stepOne'),
    headerTitleStyle: { alignSelf: 'center', justifyContent: 'center' },
  }

  setCepAndCallApi(cep) {
    const { setCep, setInvalidCep, fetchCep } = this.props;
    setCep(cep);
    if(cep.length === 8) {
      return fetchCep(cep);
    }
    setInvalidCep(true);
  }

  concatCityAndUf = (userAddress) => {
    if(userAddress.city && userAddress.uf) {
      return `${userAddress.city}/${userAddress.uf}`;
    }
    return '';
  }

  setNumber = number => {
    const { register, setUserAddress } = this.props;
    setUserAddress({ ...register.userAddress, number });
  }

  setComplement = complement => {
    const { register, setUserAddress } = this.props;
    setUserAddress({ ...register.userAddress, complement });
  }

  registerUser = () => {
    const { register, setLoading, setUserAddress, setErrorMessage, navigation, registerUser } = this.props;
    const validNumber = register.userAddress.number.length;
    if (!register.invalidCep && validNumber) {
      setErrorMessage('');
      return registerUser()
    }

    if(register.invalidCep) {
      return setErrorMessage(getText('register:label:invalid-cep'));
    }

    if(!validNumber) {
      return setErrorMessage(getText('register:label:invalid-number'))
    }
  }

  render() {
    const { loading, userAddress, errorMessage } = this.props.register;
    const cityAndUf = this.concatCityAndUf(userAddress);
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <InputWithLabel label='register:label:cep' onChangeText={cep => this.setCepAndCallApi(cep)} placeholder='register:placeholder:cep' keyboardType='numeric' maxLength={8}/>
            <InputWithLabel label='register:label:address' value={userAddress.address} disabled={true}/>
            <View style={styles.vwPickers}>
              <View style={styles.flex1}>
                <InputWithLabel label='register:label:district' value={userAddress.district} disabled={true}/>
              </View>
              <View  style={styles.flex1}>
                <InputWithLabel label='register:label:cityAndUf' value={cityAndUf} disabled={true}/>
              </View>
            </View>
            <View style={styles.vwPickers}>
              <View style={styles.flex1}>
                <InputWithLabel label='register:label:number' onChangeText={number => this.setNumber(number)} />
              </View>
              <View  style={styles.flex2}>
                <InputWithLabel label='register:label:complement' onChangeText={complement => this.setComplement(complement)} />
              </View>
            </View>
            <View style={styles.flex1}>
            <ErrorMessage message={errorMessage} />
            {loading ? 
              <Spinner color='yellow' /> : 
              <Button primary style={styles.alignSelfCenter} onPress={this.registerUser}>
                <Text> {getText('register:btn:finish')}</Text>
              </Button>
            }
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapState = state => {
  reactotron.log(state)
  return { register: state.registerReducer }
}

const mapDispatch = dispatch => {
  return {
    setCep: cep => dispatch(setCep(cep)),
    setLoading: loading => dispatch(setLoading(loading)),
    setUserAddress: address => dispatch(setUserAddress(address)),
    setErrorMessage: (errorMessage) => dispatch(setErrorMessage(errorMessage)),
    setInvalidCep: invalid => dispatch(setInvalidCep(invalid)),
    registerUser: () => dispatch(registerUser()),
    fetchCep: cep => dispatch(fetchCep(cep))
  };
}

export const RegisterStepTwoConnected = connect(mapState, mapDispatch)(RegisterStepTwo);
