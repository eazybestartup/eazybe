import { StyleSheet } from 'react-native';
import colors from '../../../colors/colors.enum';

export const styles = StyleSheet.create({
  textStyle:{ color: colors.purpleBackground },
  placeHolderTextStyle: { color: colors.placeholderInputWithLabel, fontSize: 14, paddingTop: 15 },
  marginLeft15: {
    flex:1, 
    marginLeft: 15,
    marginBottom: 15,
  },
  lblInput: { 
    marginBottom: 10,
    color: colors.white,
    fontSize: 14
  },
  border: {
    flex:1,
    backgroundColor: colors.white,
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    paddingLeft: 5,
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
});
