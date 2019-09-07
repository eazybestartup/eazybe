import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Badge, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {
  UserInfoFeed
} from './user-info-feed.component'
export default class PostCard extends Component {
  
  render() {
    const neighborhoodName = 'Bairro Santa Maria • '
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://thumbs.dreamstime.com/b/avatar-sem-cara-do-homem-de-neg%C3%B3cios-homem-no-terno-com-la%C3%A7o-azul-85824471.jpg'}} />
                <UserInfoFeed userName="Lucas" neighborhoodName={neighborhoodName} isAssalto={this.props.postType} />
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Text style={{paddingLeft: 20}}>{this.props.text}</Text>
            </CardItem>
            <CardItem style={{ alignContent: 'space-between', borderWidth:1 }}>
              <Left style={{flex:1}}>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Curtidas</Text>
                </Button>
              </Left>
              <Body style={{flex:1}}>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comentários</Text>
                </Button>
              </Body>
              <Right>
                <Text>1h atrás</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
