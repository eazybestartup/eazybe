import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

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