import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Review from './Review'
import Form from './Form/Form'
import Likes from './Likes'
import Button from './Button/Button'
import ButtonFilter from './Button/ButtonFilter'
import { style } from 'redux-logger/src/diff'

function Reviews (props) {
  const id = parseInt(useParams().id);
  const reviews = useSelector(state => state.reviews.reviews);
  const userId = reviews.map(review => review.userId);
  const filteredReviews = reviews.filter(review => review.cafeId === id);
  const positiveReviews = filteredReviews.filter(review => review.positive === true)
  const [text, setText] = useState("")

  const [positive, setPositive] = useState(
    // Берем ключ из sessionStorage. по умолчанию в клкюч передается false
    JSON.parse(sessionStorage.getItem('positive')) || false);

  //Сохраняем ключ в sessionStorage
  useEffect(() => {
    sessionStorage.setItem('positive', JSON.stringify(positive))
  }, [positive])

  const positiveReview = () => {
    if (positive === false) {
      return filteredReviews
    }
      return positiveReviews
  }


  return (
    <div className={styles.reviewsContent}>
      <div className={styles.reviewsFormButton}>
        <Form
          text={text}
          setText={setText}
        />
        <div className={styles.appraisal}>
          <Likes />
        </div>
        <div>
          <Button
            text={text}
            setText={setText}
            id={id}
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => setPositive(false)}
          className={positive === false ? styles.selected : styles.btn}
        >
          Все отзывы
        </button>
        <button
          onClick={() => setPositive(true)}
          className={positive === true ? styles.selected : styles.btn}
        >
          Положительные отзывы
        </button>
      </div>
      <div className={styles.reviews}>
        <div>
          {positiveReview().map(review => {
            return <Review review={review} userId={userId}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Reviews;