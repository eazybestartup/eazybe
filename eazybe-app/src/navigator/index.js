import { createStackNavigator, createAppContainer } from "react-navigation";
import Cart from '../ui/screens/Cart';
import Products from '../ui/screens/Products';
import CadastroStepOne from '../ui/screens/CadastroStepOne';
import Login from '../ui/screens/Login';
import Cadastro1 from '../ui/screens/Cadastro1'
import Feed from '../ui/screens/Feed'
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
  initialRouteName: 'RegisterStepOneConnected',
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
