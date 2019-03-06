
    
import React, { Component } from 'react'
import { PropTypes as t } from 'prop-types'
import { Feed } from '../styled'

class FeedComponent extends Component {
  state = { newPost: '' }
  handlePostChange = event => {
    this.setState({ newPost: event.target.value })
  }
  handlePostSubmit = event => {
    event.preventDefault();
    this.props.createPost({
      user: this.props.activeUser.username,
      post: this.state.newPost
    })
    this.setState({ newPost: '' })
  }
  render() {
    const { avatar } = this.props.activeUser
    return (
      <Feed>
        <Feed.Header>
          <Feed.Avatar src={ avatar }>
          </Feed.Avatar>
          <Feed.Form onSubmit={this.handlePostSubmit}>
            <Feed.Input 
              type="text"
              aria-label="Enter New Post"
              placeholder="What's happening?"
              value={this.state.newPost}
              onChange={this.handlePostChange}
            />
            <Feed.Button
              aria-label="Submit Post"
            >
              <Feed.ButtonIcon
                icon="paper-plane"
              />
            </Feed.Button>
          </Feed.Form>
        </Feed.Header>
        <Feed.Posts>
          { this.props.children }
        </Feed.Posts>
      </Feed>
    )
  }
}

FeedComponent.propTypes = {
  activeUser: t.object.isRequired,
  createPost: t.func.isRequired,
}

export default FeedComponent