import {
  SET_USER,
  GET_USER_BY_ID,
} from './user.actionTypes';

const setUser = (user) => {
  return {
    type: SET_USER,
    user
  };
};

const getUserById = id => {
  return {
    type: GET_USER_BY_ID,
    id
  }
}

export {
  setUser,
  getUserById,
  GET_USER_BY_ID,
};
