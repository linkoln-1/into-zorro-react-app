import React from 'react';
import styles from '../styles.module.css';

function Form(props) {
  const handleChangeReview = (e) => {
    props.setText(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Введите отзыв"
        value={props.text}
        onChange={handleChangeReview}
      />
    </div>
  );
}

export default Form;
