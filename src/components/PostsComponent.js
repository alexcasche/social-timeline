
    
import React from 'react'
import { PropTypes as t } from 'prop-types'
import { Posts } from '../styled'

const PostsComponent = props => {
  return (
    <Posts>
      post component
    </Posts>
  )
}

PostsComponent.propTypes = {
  activePosts: t.array.isRequired,
  createPost: t.func.isRequired,
  deletePost: t.func.isRequired,
}

export default PostsComponent