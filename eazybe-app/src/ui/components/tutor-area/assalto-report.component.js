import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Card, Button, Icon, Badge, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base';

import {
  UserInfoFeed
} from '../feed/user-info-feed.component'
import moment from 'moment'
import localization from 'moment/locale/pt-br'  
import { POST_TYPES } from '../../../enums/news/post-types.enum'

moment.locale('pt-br')

const styles = StyleSheet.create({
  flex1: { 
    flex:1
  },
  vw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start'
  },
  neighborhoodName: {
    fontSize: 16,
    color: '#000000',
    paddingRight: 20,
    fontFamily: 'Comfortaa'
  },
  textBadge: {
    color: '#FFF',
    fontSize: 14,
  },
  badge: {
    textAlign: 'center',
    justifyContent: 'center'
  },
  fullName: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Comfortaa'
  },
  button: {
      borderRadius: 50,
      marginRight: 20
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  comfortaa: {
    paddingLeft: 20,
    fontFamily: 'Comfortaa'
  },
  reportText: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: '500'
  }
})

whatBadge = isAssalto => {
    switch(isAssalto) {
      case POST_TYPES.ASSALTO: {
        return <Badge danger style={styles.badge}><Text style={styles.textBadge}>{POST_TYPES.ASSALTO.toLowerCase()}</Text></Badge>
      }
      default:
        return null
    }
  }

export default class AssaltoReport extends Component {
  render() {
    
    const { user, type_post, text, } = this.props.post
    return (
      <View style={{ marginBottom: 20}}>
        <Card bordered style={{ borderRadius: 8 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://thumbs.dreamstime.com/b/avatar-sem-cara-do-homem-de-neg%C3%B3cios-homem-no-terno-com-la%C3%A7o-azul-85824471.jpg'}} />
              <UserInfoFeed userName={user.full_name} neighborhoodName={user.neighborhood} isAssalto={type_post} />
          </Left>
          </CardItem>
          <CardItem cardBody>
            <Text style={styles.comfortaa}>{text}</Text>
          </CardItem>
          <CardItem cardBody>
            <Text style={styles.reportText}>Reportar à polícia?</Text>
          </CardItem>
          <CardItem footer style={styles.btnContainer}>
            <Button danger style={styles.button}>
                <Icon name='close' />
            </Button>
            <Button success style={styles.button}>
                <Icon name='checkmark' />
            </Button>
          </CardItem>
        </Card>
      </View>
    );
  }
}
