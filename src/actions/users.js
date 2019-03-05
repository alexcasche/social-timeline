import { SET_USERS } from '../constants/actionTypes'

export function setUsers(payload) {
  return { type: SET_USERS, payload }
}