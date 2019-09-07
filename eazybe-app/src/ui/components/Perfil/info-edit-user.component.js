import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getText from '../../../enums/dictionary/dictionary';
import { styles } from './styles'
import { connect } from 'react-redux'
import InputWithLabel from '../register/InputWithLabel/InputWithLabel';
import { Container, Content, Form } from 'native-base';

export class InfoEditUser extends Component {
    render(){
        return(
            <Container style={styles.container}>
                <Content>
                    <Form>
                        <View style={styles.userEdit}>
                            <InputWithLabel label='register:label:email' placeholder='register:placeholder:email' onChangeText={email => this.props.setEmail(email)}/>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
  };

const InfoEditUserConnect = connect(mapStateToProps)(InfoEditUser);
export default InfoEditUserConnect;