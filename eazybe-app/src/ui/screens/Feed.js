import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';

export default class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    static navigationOptions = {
        title: 'Feed'
    }
    render() {
        return(
            <View>
            </View>
        );
    }
}

const mapState = state => ({
    //register: state.registerReducer
  })

  const mapDispatch = dispatch => {
    return {
      //setName: (name) => dispatch(setName(name)),
      //setBirthDate: (birthDate) => dispatch(setBirthDate(birthDate)),
      //setSex: (sex) => dispatch(setSex(sex)),
      //setEmail: (email) => dispatch(setEmail(email)),
      //setPassword: (password) => dispatch(setPassword(password)),
      //setConfirmationPassword: (confirmationPassword) => dispatch(setConfirmationPassword(confirmationPassword)),
      //setErrorMessage: (errorMessage) => dispatch(setErrorMessage(errorMessage)),
    }
  }

export const FeedConnected = connect(mapState, mapDispatch)(Feed);