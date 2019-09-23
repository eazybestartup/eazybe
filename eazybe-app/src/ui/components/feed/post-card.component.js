import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {
  UserInfoFeed
} from './user-info-feed.component'
import { plural } from '../../../utils/validate'
import moment from 'moment'
import localization from 'moment/locale/pt-br'  
moment.locale('pt-br')

const styles = StyleSheet.create({
  paddingLeft20: {
    paddingLeft: 20,
  },
  alignButtons: { alignContent: 'space-between' },
  flex1: { 
    flex:1
  },
  card: {
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    fontFamily: 'Comfortaa'
  },
  fontFamily: {
    fontFamily: 'Comfortaa'
  }
})

const LikeButton = props => (
  <Left style={styles.flex1}>
    <Button transparent>
      <Icon active name="thumbs-up" />
      <Text>{plural(props.likes, '0')}</Text>
    </Button>
  </Left>
)

const CommentButton = props => (
  <Left style={styles.flex1}>
    <Button transparent>
      <Icon active name="chatbubbles" />
      <Text>{plural(props.comments, '0')}</Text>
    </Button>
  </Left>
) 

export default class PostCard extends Component {
  render() {
    
    const { user, type_post, text, likes, comments, created_at } = this.props.post
    return (
      <Card bordered style={{ borderRadius: 8 }}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://thumbs.dreamstime.com/b/avatar-sem-cara-do-homem-de-neg%C3%B3cios-homem-no-terno-com-la%C3%A7o-azul-85824471.jpg'}} />
            <UserInfoFeed userName={user.full_name} neighborhoodName={user.neighborhood} isAssalto={type_post} />
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Text style={styles.paddingLeft20}>{text}</Text>
        </CardItem>
        <CardItem style={styles.alignButtons}>
          <LikeButton likes={likes} />
          <CommentButton comments={comments} />
          <Right>
            <Text style={styles.fontFamily}>{moment(created_at, 'YYYYMMDD').fromNow()}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
