import React from 'react'
import styles from '../styles.module.css'

function ButtonFilter (props) {
  const handleClick = () => {

  }
  return (
    <button className={styles.button}
    onClick={handleClick}>
      Положительные отзывы
    </button>
  )
}

export default ButtonFilter;