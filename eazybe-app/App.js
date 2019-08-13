import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import moment from 'moment';
import Navigator from './src/navigator/index';
import rootReducer from './src/state/main';

// sagas
import { newsSaga } from './src/state/news/news.saga'
import { registerSaga } from './src/state/register/register.saga'

if (__DEV__) {
  Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect() // let's connect!
}

moment().locale('pt-br')

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, compose(Reactotron.createEnhancer(), applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(newsSaga)
sagaMiddleware.run(registerSaga)

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}> 
        <Navigator />
      </Provider>
    );
  }
}
