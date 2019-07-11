import { createStackNavigator, createAppContainer } from "react-navigation";
import Cart from '../ui/screens/Cart';
import Products from '../ui/screens/Products';
import CadastroStepOne from '../ui/screens/CadastroStepOne';

const AppNavigator = createStackNavigator(
{
  Products,
  Cart,
  CadastroStepOne,
},
{
  initialRouteName: 'CadastroStepOne',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#40476D',
      textAlign: 'center',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {textAlign:'center', alignSelf:'center',flex:1}
  }
}
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
