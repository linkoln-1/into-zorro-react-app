import React from 'react'
import { useDispatch } from 'react-redux'
import { addReview } from './action'

function Button (props) {
  const dispatch = useDispatch();

  const handleAddReview = () => {
    dispatch(addReview(props.text, props.setText, props.reviews))
  }

  return (
    <div>
      <button onClick={() => handleAddReview(props.text, props.setText, props.reviews)}>
        Оставить отзыв
      </button>
    </div>
  )
}

export default Button