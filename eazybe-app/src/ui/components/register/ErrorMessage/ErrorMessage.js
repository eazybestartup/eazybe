import React from 'react';
import { Text } from 'native-base';
import { styles } from './styles'
import colors from '../../../colors/colors.enum'
import getText from '../../../../enums/dictionary/dictionary'

export default ErrorMessage = props => {
  return (
    <Text style={styles.errorMessage}>{props.message ? `* ${props.message}` : ''}</Text> 
  )
}
