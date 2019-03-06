import React from 'react'
import { PropTypes as t } from 'prop-types'
import UserComponent from './UserComponent'
import FeedComponent from './FeedComponent'
import PostComponent from './PostComponent'
import { Page } from '../styled'

const AppComponent = props => {
  const { activeUser, activePosts, users, createPost, deletePost } = props
  return (
    <Page>
      <UserComponent activeUser={activeUser} />
      <FeedComponent 
        activeUser={activeUser}
        createPost={createPost}
      >
        {activePosts.map((post, index) =>
          <PostComponent
            post={post}
            author={users[post.author]}
            deletePost={deletePost}
            key={index}
          />
        )}
      </FeedComponent>
    </Page>
  )
}

AppComponent.propTypes = {
  activeUser: t.object.isRequired,
  activePosts: t.array.isRequired,
  users: t.object.isRequired,
  createPost: t.func.isRequired,
  deletePost: t.func.isRequired,
}

AppComponent.defaultProps = {
  activeUser: {},
  activePosts: [],
}

export default AppComponent