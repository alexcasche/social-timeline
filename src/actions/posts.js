import { SET_POSTS, CREATE_POST, DELETE_POST } from '../constants/actionTypes'

export function setPosts(payload) {
  return { type: SET_POSTS, payload }
}

export function createPost(payload) {
  return { type: CREATE_POST, payload }
}

export function deletePost(payload) {
  return { type: DELETE_POST, payload }
}