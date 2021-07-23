import React from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from './action'
import styles from '../styles.module.css'
import { useParams } from 'react-router-dom'



function Button (props) {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);


  const handleAddReview = () => {
    dispatch(addReview(props.text, props.setText, id));
    props.setText("");
  }

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => handleAddReview(props.text, props.setText, id)}
      >
        Оставить отзыв
      </button>
    </div>
  )
}

export default Button