export const getPosts = state => {
  return state.posts
}

export const getActivePosts = state => {
  const { username } = state.settings
  let posts = [];
  Object.keys(state.posts).forEach(key => {
    const currentPost = state.posts[key]
    if(currentPost.username === username) {
      posts.push(currentPost)
    }
  })
  return posts
}