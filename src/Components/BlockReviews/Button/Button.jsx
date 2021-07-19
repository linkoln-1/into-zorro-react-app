import React from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from './action'
import styles from '../styles.module.css'



function Button (props) {
  const dispatch = useDispatch();

  const handleAddReview = () => {
    dispatch(addReview(props.text, props.setText, props.id));
    props.setText("");
  }

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => handleAddReview(props.text, props.setText, props.id)}
      >
        Оставить отзыв
      </button>
    </div>
  )
}

export default Button