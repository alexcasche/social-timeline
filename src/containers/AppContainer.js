import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
  getPosts, 
  getSettings, 
  getUsers, 
  getActivePosts,
  getActiveUser
} from '../selectors'
import { 
  setPosts, 
  setSettings, 
  setUsers,
  createPost,
  deletePost
} from '../actions'
import defaultData from '../constants/defaultData'
import { objectEmpty } from '../helpers'
import AppComponent from '../components/AppComponent'

class AppContainer extends Component {
  componentDidMount() {
    const { posts, settings, users, actions } = this.props
    if(objectEmpty(posts)) actions.setPosts(defaultData.posts)
    if(objectEmpty(settings)) actions.setSettings(defaultData.settings)
    if(objectEmpty(users)) actions.setUsers(defaultData.users)
  }
  render() {
    const { activePosts, activeUser, users, actions } = this.props
    return (
      <AppComponent 
        activePosts={activePosts}
        activeUser={activeUser}
        users={users}
        createPost={actions.createPost}
        deletePost={actions.deletePost}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: getPosts(state),
    settings: getSettings(state),
    users: getUsers(state),
    activePosts: getActivePosts(state),
    activeUser: getActiveUser(state)
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setPosts: bindActionCreators(setPosts, dispatch),
      setSettings: bindActionCreators(setSettings, dispatch),
      setUsers: bindActionCreators(setUsers, dispatch),
      createPost: bindActionCreators(createPost, dispatch),
      deletePost: bindActionCreators(deletePost, dispatch),
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)