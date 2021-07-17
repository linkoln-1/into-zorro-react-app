import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addReview, loadReviews } from './actions'
import { useParams } from 'react-router-dom'
import User from './Users/User'
import { loadUsers } from './Users/actions'

function Reviews (props) {
  const dispatch =useDispatch();
  const id = parseInt(useParams().id);
  const reviews = useSelector(state => state.reviews.reviews);
  const users = useSelector(state => state.users.users);
  const userId = reviews.map(review => review.userId);

  const filteredUsers = users.filter(user => userId.includes(user.id));

  // const filteredUsers = users.filter(user => user.id === userId);

  const [text, setText] = useState("")

  useEffect(() => {
    dispatch(loadUsers())
  }, []);

  const handleChangeReview = (e) => {
    setText(e.target.value)
  };

  const handleAddReview = (text, setText, id) => {
    dispatch(addReview(text, setText, id))
  };

  const handleLike = () => {
    alert()
  }

  return (
    <div className={styles.reviewsContent}>
      <div className={styles.reviewsFormButton}>
        <input
          className={styles.input}
          type="text"
          placeholder="Введите отзыв"
          value={text}
          onChange={handleChangeReview}
        />
        <div  className={styles.appraisal}>
          <div className={styles.likes}>
            <div className={styles.like} onClick={handleLike}>
              <i className="far fa-thumbs-up"></i>
            </div>
            <div className={styles.dislike}>
              <i className="far fa-thumbs-down"></i>
            </div>
          </div>
        </div>
        <div>
          <button
            className={styles.button}
            onClick={() => handleAddReview(text, setText, id)}
          >
            Оставить отзыв
          </button>
        </div>
      </div>
      <div className={styles.reviews}>
        <div>
          {filteredUsers.map(user => {
            return <User user={user} reviews={reviews} id={id}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Reviews;