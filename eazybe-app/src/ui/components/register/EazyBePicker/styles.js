import { StyleSheet } from 'react-native';
import colors from '../../../colors/colors.enum';
export const styles = StyleSheet.create({
  textStyle:{ color: colors.purpleBackground },
  placeHolderTextStyle: { color: colors.white },
  marginLeft15: {
    flex: 1, 
    marginLeft: 15,
    marginBottom: 15,
    paddingRight:30, 
    width: '100%',
  },
  lblInput: { 
    marginBottom: 10,
    color: colors.white,
    fontSize: 14
  },
  border: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.white,
  },
  vwPicker: { color: colors.white, borderWidth: 1, borderColor: colors.white, marginRight: 10 },
  picker: { color: colors.purpleBackground, borderWidth: 1, borderColor: colors.white, backgroundColor: colors.white },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
