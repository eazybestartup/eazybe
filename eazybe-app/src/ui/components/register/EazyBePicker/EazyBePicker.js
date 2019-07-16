import React from 'react';
import { Label } from 'native-base';
import { View, Picker } from 'react-native';
import { Icon } from 'react-native-elements'
import { styles } from './styles';
import getText from '../../../../enums/dictionary/dictionary'
import colors from '../../../../ui/colors/colors.enum';

const EazyBePicker = props => (
  <View style={[styles.marginLeft15, styles.shadow]}>
    <Label style={styles.lblInput}>{getText(props.label)}</Label>
    <View style={[styles.vwPicker]}>
      <Picker
        {...props}
        style={[styles.picker, styles.shadow]}
        >
        {props.values && props.values.map((item, key) => <Picker.Item key={key} label={item} value={item} />)}
      </Picker>
      <View>
        <Icon name='sort-down' type='font-awesome' size={18} color={colors.purpleBackground} />
      </View>
    </View>
  </View>
);

export default EazyBePicker;
