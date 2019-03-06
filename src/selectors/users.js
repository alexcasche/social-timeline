export const getUsers = state => {
  return state.users
}

export const getActiveUser = state => {
  const { user } = state.settings
  return state.users[user]
}

export const getUserByUsername = (state, username) => {
  return state.users[username]
}