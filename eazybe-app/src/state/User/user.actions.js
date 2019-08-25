import {
    SET_EMAIL,
    SET_ERROR_MESSAGE,
  } from './user.actionTypes';

  const setEmail = (email) => {
    return {
      type: SET_EMAIL,
      email
    };
  };

  const setErrorMessage = (errorMessage) => {
    return {
      type: SET_ERROR_MESSAGE,
      errorMessage
    };
  };
  
  export {
    setEmail,
    setErrorMessage,
  };