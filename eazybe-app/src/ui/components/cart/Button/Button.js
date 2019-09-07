import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({
  text
}) => (
  <TouchableOpacity style={styles.btnBottom}>
    <Text style={styles.lblButtonBottom}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btnBottom: {
    flex: 1,
    backgroundColor: '#88B04B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  lblButtonBottom: {
    color: '#fff',
    fontSize: 28
  },
});

export { Button };
