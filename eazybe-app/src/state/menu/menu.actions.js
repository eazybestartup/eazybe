/*
  Actions são funções que enviam os dados para o Redux. Elas sempre retornam um objeto.
  Todas as actions devem ter obrigatóriamente um atributo chamado "type".
  Esse type deve estar definido em um arquivo .actionTypes.js
*/

import {
  CHANGE_TAB_MENU_BOTTOM,
  USER_IS_TUTOR
} from './menu.actionTypes';

const changeMenuTabMenuBottom = (tab) => {
  return {
    type: CHANGE_TAB_MENU_BOTTOM,
    tab
  };
};

const userIsTutor = () => {
  return {
    type: USER_IS_TUTOR,
  }
}

export {
  changeMenuTabMenuBottom,
  userIsTutor
};
