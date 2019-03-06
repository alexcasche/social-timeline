import { SET_POSTS, CREATE_POST, DELETE_POST } from '../constants/actionTypes';
import { arrayMax } from '../helpers'
import moment from 'moment';

export const posts = (state = {}, action = {}) => {
  const { type, payload } = action;
  switch(type) {
    case SET_POSTS:
      return { ...state, ...payload }
    case CREATE_POST:
      const newId = arrayMax(Object.keys(state)) + 1
      const { user, post } = payload
      return { ...state, [newId]: {
        id: newId,
        author: user,
        date: moment(new Date()),
        text: post,
        retweets: 0,
        stars: 0
      }}
    case DELETE_POST: 
      const { [payload]: omit, ...newPosts } = state
      return newPosts
    default: 
      return state
  }
}