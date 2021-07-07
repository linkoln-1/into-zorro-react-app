import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'

function Reviews (props) {
  const dispatch =useDispatch();

  useEffect(() => {
    dispatch(loadReviews())
  }, [])

  return (
    <div className={styles.reviewsBlock}>
      <div>
        <input type="text"/>
      </div>
      <div>
        <button>оставить отзыв</button>
      </div>
    </div>
  )
}

export default Reviews;