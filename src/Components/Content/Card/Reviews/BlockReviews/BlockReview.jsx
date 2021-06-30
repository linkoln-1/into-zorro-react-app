import React from 'react'
import Reviews from '../Reviews'

function BlockReview (props) {
  return (
    <div>
      <div>
        <h1>Отзыв о ... </h1>
      </div>
      <div>
        <input
          type="text"
        />
      </div>
      <div>
        <button>Оставить отзыв</button>
      </div>
      <Reviews/>
    </div>
  )
}

export default BlockReview