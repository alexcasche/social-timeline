import { SET_POSTS } from '../constants/actionTypes';

export const posts = (state = {}, action = {}) => {
  const { type, payload } = action;
  switch(type) {
    case SET_POSTS:
      return { ...state.posts, ...payload }
    default: 
      return state
  }
}