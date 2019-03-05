export const getUsers = state => {
  return state.users
}

export const getActiveUser = state => {
  const { user } = state.settings
  return state.users[user]
}