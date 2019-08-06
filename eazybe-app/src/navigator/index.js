import { createStackNavigator, createAppContainer } from "react-navigation";
import { fromLeft, fromRight, fadeIn } from 'react-navigation-transitions';
import { RegisterStepOneConnected } from '../ui/screens/RegisterStepOne';
import { RegisterStepTwoConnected } from '../ui/screens/RegisterStepTwo';
import { TabNavigatorConnect } from './TabNavigator/TabNavigator'
import Cart from '../ui/screens/Cart';
import Products from '../ui/screens/Products';
import LoginConnected from '../ui/screens/Login';
import { NoticiasConnected } from '../ui/screens/Noticias';
import User from '../ui/screens/User';
import NewPost from '../ui/screens/NewPost';
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

const AppNavigator = createStackNavigator(
{
  Products,
  Cart,
  LoginConnected,
  RegisterStepOneConnected,
  RegisterStepTwoConnected,
  TabNavigatorConnect,
  NoticiasConnected,
  User,
  NewPost
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
