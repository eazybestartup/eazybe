import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import Navigator from './src/navigator/index';

import rootReducer from './src/state/main';

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
        <Navigator />
      </Provider>
    );
  }
}
