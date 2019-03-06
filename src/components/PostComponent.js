
    
import React from 'react'
import { PropTypes as t } from 'prop-types'
import { Post } from '../styled'
import moment from 'moment'

const PostComponent = props => {
  const { post, author, deletePost } = props
  const handleDeletePost = () => {
    deletePost(post.id)
  }
  return (
    <Post>
      <Post.Avatar src={author.avatar} />
      <Post.Main>
        <Post.Delete onClick={handleDeletePost}>
          <Post.DeleteIcon icon="times" />
        </Post.Delete>
        <Post.Details>
          <Post.Name>{author.firstName} {author.lastName}</Post.Name>
          <Post.Info>@{author.username} - {moment(post.date).format("MMM YY")}</Post.Info>
        </Post.Details>
        <Post.Content>{post.text}</Post.Content>
      </Post.Main>
    </Post>
  )
}

PostComponent.propTypes = {
  post: t.object.isRequired,
  author: t.object.isRequired,
  deletePost: t.func.isRequired,
}

export default PostComponent
