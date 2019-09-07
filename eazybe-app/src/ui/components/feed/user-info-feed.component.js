import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Badge, Body } from 'native-base';

const styles = StyleSheet.create({
  vw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start'
  },
  neighborhoodName: {
    fontSize: 14
  }
})

const UserInfoFeed = props => (
  <Body>
    <Text>{props.userName}</Text>
    <View style={styles.vw}>
      <Text style={styles.neighborhoodName}>{props.neighborhoodName}</Text>
      {props.postType === 'assalto' ? <Badge danger><Text>Assalto</Text></Badge> : null}
    </View>
  </Body>
);

export { UserInfoFeed };
