import {
  SET_NAME,
  SET_BIRTH_DATE,
  SET_SEX,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRMATION_PASSWORD,
  SET_ERROR_MESSAGE,
  SET_CEP,
  SET_ADDRESS,
  SET_LOADING,
  SET_INVALID_CEP,
} from './register.actionTypes';
import Reactotron from 'reactotron-react-native'

const INITIAL_STATE = {
  name: '',
  birthDate: new Date(2019, 0, 1),
  userSex: 'Masculino',
  email: '',
  password: '',
  confirmationPassword: '',
  userAddress: {
    cep: '',
    address: '',
    number: '',
    district: '',
    complement: '',
    city: '',
    uf: '',
  },
  errorMessage: '',
  sexOptions: ['Masculino', 'Feminino', 'Não binário'],
  loading: false,
  invalidCep: true,
};

const userAddressFromApiInitialState = {
  cep: '',
  address: '',
  district: '',
  city: '',
  uf: '',
}

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name }
    case SET_BIRTH_DATE:
      return { ...state, birthDate: action.birthDate }
    case SET_SEX:
      return { ...state, userSex: action.sex }
    case SET_EMAIL:
      return { ...state, email: action.email }
    case SET_PASSWORD:
      return { ...state, password: action.password }
    case SET_CONFIRMATION_PASSWORD:
      return { ...state, confirmationPassword: action.password }
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.errorMessage }
    case SET_CEP: 
      return { ...state, userAddress: { ...userAddressFromApiInitialState, number: state.userAddress.number, complement: state.userAddress.complement,  cep: action.cep } }
    case SET_ADDRESS: 
      return { ...state, userAddress: action.userAddress }
    case SET_LOADING:
      return { ...state, loading: action.loading }
    case SET_INVALID_CEP:
      return { ...state, invalidCep: action.invalid }
    default:
      return state;
  }  
};

export default registerReducer;
