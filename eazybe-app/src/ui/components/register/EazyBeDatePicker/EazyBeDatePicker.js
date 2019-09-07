import React from 'react';
import { Label, DatePicker } from 'native-base';
import { View } from 'react-native'
import moment from 'moment';
import { Icon } from 'react-native-elements'
import { styles } from './styles';
import getText from '../../../../enums/dictionary/dictionary';
import colors from '../../../../ui/colors/colors.enum';

const EazyBeDatePicker = props => (
  <View style={styles.marginLeft15}>
    <Label style={styles.lblInput}>{getText(props.label)}</Label>
    <View style={[styles.border, styles.shadow]}>
      <Icon name='calendar' type='font-awesome' size={18} color={colors.purpleBackground} />
      <DatePicker
        style={styles.border}
        defaultDate={new Date(2019, 0, 1)}
        locale={"pt"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        textStyle={styles.textStyle}
        placeHolderTextStyle={styles.placeHolderTextStyle}
        onDateChange={props.onDateChange}
        disabled={props.disabled}
        formatChosenDate={date => moment(date).locale('pt-br').format('DD/MM/YYYY')}
        {...props}
      />
    </View>
  </View>
);

export default EazyBeDatePicker;
