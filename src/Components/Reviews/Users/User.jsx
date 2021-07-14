import React, { useEffect } from 'react'
import styles from '../styles.module.css'

function User (props) {
  const filteredReviews = props.reviews.filter(item => item.userId === props.user.id);

  return (
    <div className={styles.reviewBlock}>
      <div className={styles.user}>
        {props.user.name}
      </div>
      {filteredReviews.map((review) => {
        return (
          <div>
            <div>
              {review.text}
            </div>
            <div className={styles.date}>
              {review.date}
            </div>
          </div>

        )
      })}
    </div>
  )
}

export default User