import React from 'react';
import styles from './styles.module.css';
import User from './Users/User';
import { useSelector } from 'react-redux';

function Review(props) {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);

  const user = users
    .filter((user) => props.userId.includes(user.id))
    .find((user) => user.id === props.review.userId);

  return (
    <div className={styles.reviewBlock}>
      <div className={styles.user}>
        {loading ? <div> Загрузка ... </div> : <User user={user} />}
      </div>
      <div className={styles.reviews}>{props.review.text}</div>
      <div className={styles.date}>{props.review.date}</div>
    </div>
  );
}

export default Review;
