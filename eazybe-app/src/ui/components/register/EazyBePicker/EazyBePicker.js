import React from 'react';
import { Label } from 'native-base';
import { View, Picker } from 'react-native';
import { styles } from './styles';
import getText from '../../../../enums/dictionary/dictionary'

const EazyBePicker = props => (
  <View style={[styles.marginLeft15, styles.shadow]}>
    <Label style={styles.lblInput}>{getText(props.label)}</Label>
    <View style={[styles.vwPicker]}>
      <Picker
        {...props}
        style={[styles.picker, styles.shadow]}>
        {props.values && props.values.map((item, key) => <Picker.Item key={key} label={item} value={item} />)}
      </Picker>
    </View>
  </View>
);

export default EazyBePicker;
