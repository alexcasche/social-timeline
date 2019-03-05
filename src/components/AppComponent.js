
    
import React from 'react'
import { PropTypes as t } from 'prop-types'
import UserComponent from './UserComponent'
import PostsComponent from './PostsComponent'
import { Page } from '../styled'

const AppComponent = props => {
  return (
    <Page>
      <UserComponent activeUser={props.activeUser} />
      <PostsComponent 
        activePosts={props.activePosts}
        createPost={props.createPost}
        deletePost={props.deletePost}
      />
    </Page>
  )
}

AppComponent.propTypes = {
  activeUser: t.object.isRequired,
  activePosts: t.array.isRequired,
  createPost: t.func.isRequired,
  deletePost: t.func.isRequired,
}

AppComponent.defaultProps = {
  activeUser: {},
  activePosts: [],
}

export default AppComponent