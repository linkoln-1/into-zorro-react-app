import React from 'react';
import styles from "../../../../common/Common.module.css";
import image from "../../../../images/Card-foto-1.jpeg";

function CardItem1(props) {
 return (
   <div className={styles.cardItem1}>
    <div className={styles.cardImage}>
     <img src={image} alt="image"/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span> Travel's coffee</span>
     </div>
    </div>
    <div className="addressees-and-City">
     <div className={styles.city}>
      <span>Грозный</span>
     </div>
     <div className={styles.address}>
      <span>Димаеваб 14</span>
     </div>
      <div>
        Отзыв
      </div>
    </div>
   </div>
 );
}

export default CardItem1;
