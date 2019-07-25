import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import colors from '../../../colors/colors.enum'

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    padding: 5,
    margin: 15,
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})


const ButtonNewPost = (props) => {
  return (
    <Button style={[styles.button, styles.shadow]} onPress={props.onPress} >
      <Icon name='sticky-note' type="font-awesome" color={colors.white} size={32} />
    </Button>
  );
}

export default ButtonNewPost;
