import {
  SET_USER,
  FINISH_GET_USER_BY_ID
} from './user.actionTypes';

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.user }
    case FINISH_GET_USER_BY_ID:
    default:
      return state;
  }  
};

export default userReducer;
