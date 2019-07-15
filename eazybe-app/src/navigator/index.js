import { createStackNavigator, createAppContainer } from "react-navigation";
import Cart from '../ui/screens/Cart';
import Products from '../ui/screens/Products';
import { RegisterStepOneConnected } from '../ui/screens/RegisterStepOne';
import { RegisterStepTwoConnected } from '../ui/screens/RegisterStepTwo';
import colors from '../ui/colors/colors.enum';

const AppNavigator = createStackNavigator(
{
  Products,
  Cart,
  RegisterStepOneConnected,
  RegisterStepTwoConnected,
},
{
  initialRouteName: 'RegisterStepTwoConnected',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.navyBlue,
      textAlign: 'center',
    },
    headerTintColor: colors.white,
    headerTitleStyle: { textAlign:'center', alignSelf:'center',flex:1 }
  }
}
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
