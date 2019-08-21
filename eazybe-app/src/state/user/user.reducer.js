import {
  SET_USER,
} from './user.actionTypes';

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.user }
    default:
      return state;
  }  
};

export default userReducer;
