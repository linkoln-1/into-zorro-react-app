import React, { useState} from 'react';
import styles from "../../../../common/Common.module.css";
import Rating from "react-rating";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function StarRating(props) {
const rating = <FontAwesomeIcon icon={faStar} />
 const initialValue = props.rating;



 return (
   <div className={styles.RatingBlock}>
     <Rating
       initialRating={props.rating}
       emptySymbol={rating}
       fullSymbol={rating}
     />
    <p>rating is {initialValue}</p>
   </div>
 );
}

export default StarRating;
