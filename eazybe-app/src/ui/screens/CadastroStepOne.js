import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

export default class CadastroStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Cadastro'
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
