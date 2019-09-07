import React from 'react';
import { Item, Input, Label } from 'native-base';
import { styles } from './styles'
import colors from '../../../colors/colors.enum'
import getText from '../../../../enums/dictionary/dictionary'
export default InputWithLabel = props => {
  return (
    <Item stackedLabel style={styles.itemContainer} >
      <Label 
        style={styles.lblInput}
      >
      {getText(props.label)}</Label>
      <Input
        {...props}
        regular
        style={[props.disabled ? styles.iptDisabled : styles.input, styles.shadow]}
        placeholderTextColor={props.disabled ? colors.placeholderInputWithLabelDisabled : colors.placeholderInputWithLabel}
        placeholder={getText(props.placeholder)} />
    </Item>   
  )
}
