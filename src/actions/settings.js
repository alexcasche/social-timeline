import { SET_SETTINGS } from '../constants/actionTypes'

export function setSettings(payload) {
  return { type: SET_SETTINGS, payload }
}