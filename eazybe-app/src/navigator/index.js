import { createStackNavigator, createAppContainer } from "react-navigation";
import Cart from '../ui/screens/Cart';
import Products from '../ui/screens/Products';
import CadastroStepOne from '../ui/screens/CadastroStepOne';
import Login from '../ui/screens/Login';
import Cadastro1 from '../ui/screens/Cadastro1'
import Feed from '../ui/screens/Feed'

const AppNavigator = createStackNavigator(
{
  Products,
  Cart,
  CadastroStepOne,
  Login,
  Cadastro1,
  Feed
},
{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#40476D',
      textAlign: 'center',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {textAlign:'center', alignSelf:'center',flex:1}
  }
}
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
