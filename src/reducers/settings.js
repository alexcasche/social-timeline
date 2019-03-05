import { SET_SETTINGS } from '../constants/actionTypes';

export const settings = (state = {}, action = {}) => {
  const { type, payload } = action;
  switch(type) {
    case SET_SETTINGS:
      return { ...state.settings, ...payload }
    default: 
      return state
  }
}