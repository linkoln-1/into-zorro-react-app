import React, { useState } from 'react'

function Form (props) {

  const handleChangeReview = (e) => {
    props.setText(e.target.value)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введите отзыв"
        value={props.text}
        onChange={handleChangeReview}
      />
    </div>
  )
}

export default Form