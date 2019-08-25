import {
    SET_EMAIL,
    SET_ERROR_MESSAGE,
  } from './user.actionTypes'; 

const initialState = {
    nome: 'Leonardo Oliveira',
    rua: 'Rua Palhoça, ',
    num: '162, ',
    complemento: 'casa 1, ',
    bairro: 'Jardim Record, ',
    cidade: 'Taboão da Serra',
    estado: '/SP',
    mail: 'Leonardo565@gmail.com',
    errorMessage: '',

}
const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_EMAIL:
          return { ...state, email: action.email }
        case SET_ERROR_MESSAGE:
          return { ...state, errorMessage: action.errorMessage }
        default:
          return state;
    }
};

export default userReducer;