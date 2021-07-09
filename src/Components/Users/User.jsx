import React, { useEffect } from 'react'
import Review from '../Reviews/Review'


function User (props) {
  const filteredReviews = props.reviews.filter(item => item.userId === props.user.id)

  return (
    <div>
      {props.user.name}
      {filteredReviews.map((review) => {
        return <Review key={review.id} review={review}/>
      })}
    </div>
  )
}

export default User