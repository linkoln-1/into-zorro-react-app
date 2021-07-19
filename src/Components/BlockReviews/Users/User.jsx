import React from 'react'
import { useSelector } from 'react-redux'

function User (props) {
  // const users = useSelector(state => state.users.users);
  //
  // const user = users
  //   .filter(user => props.userId.includes(user.id))
  //   .find(user => user.id === props.review.userId);

  return (
    <div>
      {props.user.name}
    </div>
  )
}

export default User