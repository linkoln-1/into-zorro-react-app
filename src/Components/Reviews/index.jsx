import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadReviews } from './actions'
import { useParams } from 'react-router-dom'
import User from './Users/User'
import { loadUsers } from './Users/actions'
// import Form from './Form/Form'
// import Button from './Button/Button'
import { addReview } from './Button/action'

function Reviews (props) {
  const dispatch =useDispatch();
  const reviews = useSelector(state => state.reviews.reviews);
  const id = parseInt(useParams().id);
  const users = useSelector(state => state.users.users);
  const userId = reviews.map(review => review.userId);
  const filteredUsers = users.filter(item => userId.includes(item.id));
  const [text, setText] = useState("")


  useEffect(() => {
    dispatch(loadReviews(id));
    dispatch(loadUsers())
  }, []);

  const handleChangeReview = (e) => {
    setText(e.target.value)
  };

  const handleAddReview = (text, setText, id) => {
    dispatch(addReview(text, setText, id))
  };

  return (
    <div className={styles.reviewsContent}>
      <div className={styles.reviewsFormButton}>
        <input
          type="text"
          placeholder="Введите отзыв"
          value={text}
          onChange={handleChangeReview}
        />
        <button onClick={() => handleAddReview(text, setText, id)}>
          Оставить отзыв
        </button>
      </div>
      <div className={styles.reviews}>
        <div>
          {filteredUsers.map(user => {
            return <User user={user} reviews={reviews}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Reviews;