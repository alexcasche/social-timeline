import { SET_USERS } from '../constants/actionTypes';

export const users = (state = {}, action = {}) => {
  const { type, payload } = action;
  switch(type) {
    case SET_USERS:
      return { ...state.user, ...payload }
    default: 
      return state
  }
}