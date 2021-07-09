import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from './actions'


function Users (props) {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.reviews);
  const users = useSelector(state => state.users.users);
  const userId = reviews.map(review => review.userId);
  const filteredUsers = users.filter(item => userId.includes(item.id))

  useEffect(() => {
   dispatch(loadUsers())
 }, []);


  return (
    <div>
      {filteredUsers.map(user => {
        return (
          <div>
            {user.name}
          </div>
        )
      })}
    </div>
  )
}

export default Users;