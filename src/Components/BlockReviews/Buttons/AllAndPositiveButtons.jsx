import React from 'react';
import styles from '../styles.module.css';

function AllAndPositiveButtons(props) {
  return (
    <div className={styles.button}>
      <button
        onClick={() => props.setFilterPositive(false)}
        className={props.filterPositive ? styles.btn : styles.selected}
      >
        Все отзывы
      </button>
      <button
        onClick={() => props.setFilterPositive(true)}
        className={props.filterPositive ? styles.selected : styles.btn}
      >
        Положительные отзывы
      </button>
    </div>
  );
}

export default AllAndPositiveButtons;
