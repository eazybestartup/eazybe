/*
  Actions são funções que enviam os dados para o Redux. Elas sempre retornam um objeto.
  Todas as actions devem ter obrigatóriamente um atributo chamado "type".
  Esse type deve estar definido em um arquivo .actionTypes.js
*/

import { ADD_ITEM, GET_INITIAL_PRICE, CLEAR_CART, REMOVE_ITEM } from './cart.actionTypes';

const addItem = (itemId) => {
  return {
    type: ADD_ITEM,
    productId: itemId,
  };
};

const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    productId: itemId,
  };
};

const getInitialPrice = () => {
  return {
    type: GET_INITIAL_PRICE,
  };
};

const clearCart = () => {
  return {
    type: CLEAR_CART,
  }
}

export { addItem, removeItem, getInitialPrice, clearCart};
