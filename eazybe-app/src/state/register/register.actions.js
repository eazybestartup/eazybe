/*
  Actions são funções que enviam os dados para o Redux. Elas sempre retornam um objeto.
  Todas as actions devem ter obrigatóriamente um atributo chamado "type".
  Esse type deve estar definido em um arquivo .actionTypes.js
*/

import {
  SET_NAME,
  SET_BIRTH_DATE,
  SET_SEX,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRMATION_PASSWORD,
  SET_CEP,
  SET_ADDRESS,
  SET_ERROR_MESSAGE,
  SET_LOADING,
  SET_INVALID_CEP,
  REGISTER_USER,
  FETCH_CEP_VIA_CEP,
  AUTHENTICATE
} from './register.actionTypes';

const setName = (name) => {
  return {
    type: SET_NAME,
    name
  };
};

const setBirthDate = (birthDate) => {
  return {
    type: SET_BIRTH_DATE,
    birthDate
  };
};

const setSex = (sex) => {
  return {
    type: SET_SEX,
    sex
  };
};

const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    email
  };
};

const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    password
  };
};

const setConfirmationPassword = (password) => {
  return {
    type: SET_CONFIRMATION_PASSWORD,
    password
  };
};

const setErrorMessage = (errorMessage) => {
  return {
    type: SET_ERROR_MESSAGE,
    errorMessage
  };
};

const setCep = cep => {
  return {
    type: SET_CEP,
    cep
  };
}

const setUserAddress = userAddress => {
  return {
    type: SET_ADDRESS,
    userAddress
  };
}

const setLoading = loading => {
  return {
    type: SET_LOADING,
    loading
  };
}

const setInvalidCep = invalid => {
  return {
    type: SET_INVALID_CEP,
    invalid,
  }
}

const registerUser = () => {
  return {
    type: REGISTER_USER,
  }
}

const fetchCep = (cep) => {
  return {
    type: FETCH_CEP_VIA_CEP,
    cep
  }
}

const authenticate = user => {
  return {
    type: AUTHENTICATE,
    user
  }
}

export {
  setName,
  setBirthDate,
  setSex,
  setEmail,
  setPassword,
  setConfirmationPassword,
  setCep,
  setUserAddress,
  setErrorMessage,
  setLoading,
  setInvalidCep,
  registerUser,
  fetchCep,
  authenticate
};
