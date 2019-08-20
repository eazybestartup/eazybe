import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import ImgPerfil from '../components/Perfil/imgPerfil';
import { Container, Content, Form, Button } from 'native-base';
import colors from '../colors/colors.enum'

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
  }
}

export default class Usuário extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    //headerLeft: null,
    //title: 'Usuário',
  }

  render() {
    return (
      <Container style={styles.flex1}>
        <Content>
          <Form>
            <View>
              <ImgPerfil></ImgPerfil>
            </View>
            <View style={styles.flex6}>
              <InputWithLabel label='register:label:email' placeholder='register:placeholder:email'/>
              <InputWithLabel label='register:label:cep' placeholder='register:placeholder:cep' keyboardType='numeric' maxLength={8}/>
              <InputWithLabel label='register:label:address'  disabled={true}/>
              <InputWithLabel label='register:label:district'  disabled={true}/>
              <InputWithLabel label='register:label:cityAndUf' disabled={true}/>
              <InputWithLabel label='register:label:number'/>
              <InputWithLabel label='register:label:complement' />
              <Text>{getText('')}</Text>
              <Button primary style={styles.bntSalvar} >
                <Text style={styles.txtSalvar}>{getText('register:btn:salvarDados')}</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}