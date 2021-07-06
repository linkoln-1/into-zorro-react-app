import React, { useState} from 'react';
import {FaStar} from"react-icons/fa";
import styles from "../../../../common/Common.module.css";


function StarRating(props) {
 const [rating, setRating] = useState(null);
 const [hover, setHover] = useState(null);

 return (
   <div className={styles.RatingBlock}>
    <div>
     {[...Array(5)].map((star,i) => {
      const RatingValue = i + 1;
      return (
        <label>
         <input
           className={styles.input}
           type="radio" name="rating"
           value={RatingValue}
           onClick={() => setRating(RatingValue)}
         />
         <FaStar
           className={styles.Star}
           color={RatingValue <= (hover || rating)  ? "#ffc107" : "#e4e5e9"} size={20}
           onMouseEnter={() => setHover(RatingValue)}
           onMouseLeave={() => setHover(null)}
         />
        </label>
      )
     })}
    </div>
    <div className={styles.TextRating}>
     <p>{rating} из 5</p>
    </div>
   </div>
 );
}

export default StarRating;
