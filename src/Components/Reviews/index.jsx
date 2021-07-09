import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadReviews } from './actions'
import { useParams } from 'react-router-dom'
import Users from '../Users'
import Review from './Review'
import User from '../Users/User'
import { loadUsers } from '../Users/actions'

function Reviews (props) {
  const dispatch =useDispatch();
  const reviews = useSelector(state => state.reviews.reviews);
  const id = parseInt(useParams().id);
  const users = useSelector(state => state.users.users);
  const userId = reviews.map(review => review.userId);
  const filteredUsers = users.filter(item => userId.includes(item.id))

  useEffect(() => {
    dispatch(loadReviews(id));
    dispatch(loadUsers())
  }, [])

  return (
    <div>
      <div className={styles.reviewsContent}>
        <div>
          <input type="text"/>
        </div>
        <div>
          <button>оставить отзыв</button>
        </div>
      </div>
      <div className={styles.reviewsBlock}>
        <div className={styles.users}>
          {filteredUsers.map(user => {
            return <User user={user} reviews={reviews} userId={userId}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Reviews;