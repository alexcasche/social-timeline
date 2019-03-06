
    
import React from 'react'
import { PropTypes as t } from 'prop-types'
import { User } from '../styled'

const UserComponent = props => {
  const { avatar, firstName, lastName, username } = props.activeUser
  return (
    <User>
      <User.Avatar src={ avatar }/>
      <User.Info>
        <User.Name>{ firstName } { lastName }</User.Name>
        <User.Handle>@{ username }</User.Handle>
      </User.Info>
    </User>
  )
}

UserComponent.propTypes = {
  activeUser: t.object.isRequired
}

export default UserComponent