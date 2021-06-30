import { useDispatch, useSelector } from 'react-redux'
import styles from '../../../../common/Common.module.css'
import React, { useEffect } from 'react'
import { loadReviews } from './actionReviews'

function Reviews(props) {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.reviews);
  const loading = useSelector(state => state.reviews.loading);

  useEffect(() => {
    dispatch(loadReviews())
  }, [])

 return (
   <div>
     <div className={styles.card}>
       <div>
         {loading ? (
           <div>
             load ...
           </div>
         )
         :
         (
           <div>
             {reviews.map(review => {
               return (
                 <div>
                   {review.text}
                 </div>
               )
             })}
           </div>
         )
         }
       </div>
     </div>
   </div>
 );
}

export default Reviews;
