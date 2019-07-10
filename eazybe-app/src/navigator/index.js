import { createStackNavigator, createAppContainer } from "react-navigation";
import Cart from '../ui/screens/Cart';
import Products from '../ui/screens/Products';

const AppNavigator = createStackNavigator(
{
  Products,
  Cart,
},
{
  initialRouteName: 'Cart',
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
