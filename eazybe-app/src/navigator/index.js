import { createStackNavigator, createAppContainer } from "react-navigation";
import Cart from '../ui/screens/Cart';
import Products from '../ui/screens/Products';
import LoginConnected from '../ui/screens/Login';
import { RegisterStepOneConnected } from '../ui/screens/RegisterStepOne';
import { RegisterStepTwoConnected } from '../ui/screens/RegisterStepTwo';
import Noticias from '../ui/screens/Noticias';
import User from '../ui/screens/User';
import { TabNavigatorConnect } from './TabNavigator/TabNavigator'
import colors from '../ui/colors/colors.enum';
<<<<<<< HEAD
import FeedConnected from '../ui/screens/Feed'
=======
import { fromLeft, fromRight, fadeIn, zoomIn, zoomOut } from 'react-navigation-transitions';

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
  if(!prevScene) {
    return fromRight();
  }
  
  return whichEffect(prevScene.route.routeName, nextScene.route.routeName);
}

const whichEffect = (prevScene, nextScene) => {
  switch(true) {
    case (prevScene === 'Noticias' && nextScene === 'User'):
      return fromRight(500);
    case (prevScene === 'User' && nextScene === 'Noticias'):
      return fromLeft(500);
    default:
      return fadeIn(500);
  }
}
>>>>>>> master

const AppNavigator = createStackNavigator(
{
  Products,
  Cart,
  LoginConnected,
  FeedConnected,
  RegisterStepOneConnected,
  RegisterStepTwoConnected,
  TabNavigatorConnect,
  Noticias,
  User,
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
  },
  transitionConfig: (nav) => handleCustomTransition(nav)
}
);

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
