import { combineReducers } from 'redux';
import cartReducer from '../cart/cart.reducer';

// aqui combinamos todos os reducers do projeto para criar um reducer master e aí passar pra store
// no arquivo App.js

export default combineReducers({
  cartReducer,
});
