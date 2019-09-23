import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Badge, Body } from 'native-base';
import { POST_TYPES } from '../../../enums/news/post-types.enum'

const styles = StyleSheet.create({
  vw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  neighborhoodName: {
    fontSize: 16,
    paddingRight: 20,
    color: '#000000',
    fontFamily: 'Comfortaa'
  },
  textBadge: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Comfortaa'
  },
  badge: {
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Comfortaa'
  },
  fullName: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Comfortaa'
  },
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

const UserInfoFeed = props => (
  <Body>
    <Text style={styles.fullName}>{props.userName}</Text>
    <View style={styles.vw}>
      <Text style={styles.neighborhoodName}>{props.neighborhoodName}</Text>
      {whatBadge(props.isAssalto)}
    </View>
  </Body>
);

export { UserInfoFeed };
