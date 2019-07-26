import { combineReducers } from 'redux';
import cartReducer from '../cart/cart.reducer';
import registerReducer from '../register/register.reducer';
import menuReducer from '../menu/menu.reducer';
import newsReducer from '../news/news.reducer';

// aqui combinamos todos os reducers do projeto para criar um reducer master e aí passar pra store
// no arquivo App.js

export default combineReducers({
  cartReducer,
  registerReducer,
  menuReducer,
  newsReducer
});
