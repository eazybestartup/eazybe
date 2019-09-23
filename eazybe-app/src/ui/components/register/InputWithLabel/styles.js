
import { StyleSheet } from 'react-native';
import colors from '../../../colors/colors.enum'
export const styles = StyleSheet.create({
  itemContainer: {
    borderColor: colors.transparent,
    marginBottom: 15,
    marginRight: 30,
  },
  lblInput: { 
    marginBottom: 10,
    color: colors.white,
    fontFamily: 'Comfortaa'
  },
  input: {
    color: colors.purpleBackground,
    paddingLeft: 5,
    backgroundColor: colors.white,
    fontSize: 14,
    width: '100%',
    fontFamily: 'Comfortaa'
  },
  iptDisabled: { 
    color: colors.white,
    paddingLeft: 5,
    backgroundColor: colors.iptDisabled,
    width: '100%',
    fontSize: 14,
    fontFamily: 'Comfortaa'
  },
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
})
