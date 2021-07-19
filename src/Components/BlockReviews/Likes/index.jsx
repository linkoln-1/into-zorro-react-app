import React from 'react'
import styles from '../styles.module.css'

function Likes (props) {

  const handleLike = () => {
    alert()
  }

  return (
    <div className={styles.likes}>
      <div className={styles.like} onClick={handleLike}>
        <i className="far fa-thumbs-up"></i>
      </div>
      <div className={styles.dislike}>
        <i className="far fa-thumbs-down"></i>
      </div>
    </div>
  )
}

export default Likes