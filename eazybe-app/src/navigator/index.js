import { createStackNavigator, createAppContainer } from "react-navigation";
import Cart from '../ui/screens/Cart';
import Products from '../ui/screens/Products';
import LoginConnected from '../ui/screens/Login';
import { RegisterStepOneConnected } from '../ui/screens/RegisterStepOne';
import { RegisterStepTwoConnected } from '../ui/screens/RegisterStepTwo';
import colors from '../ui/colors/colors.enum';
import FeedConnected from '../ui/screens/Feed'

const AppNavigator = createStackNavigator(
{
  Products,
  Cart,
  LoginConnected,
  FeedConnected,
  RegisterStepOneConnected,
  RegisterStepTwoConnected,
},
{
  initialRouteName: 'LoginConnected',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.navyBlue,
      textAlign: 'center',
    },
    headerTintColor: colors.white,
    headerTitleStyle: { textAlign:'center', alignSelf:'center', flex:1, }
  }
}
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
