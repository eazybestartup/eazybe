import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import Cart from './src/ui/screens/Cart';
import rootReducer from './src/state/main';
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect() // let's connect!
}
export default class App extends React.Component {
  render() {
    return(
      <Provider store={createStore(rootReducer, Reactotron.createEnhancer())}> 
        <Cart />
      </Provider>
    );
  }
}
