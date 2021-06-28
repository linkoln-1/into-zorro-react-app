import React from 'react';
import styles from "../../../../common/Common.module.css";
import image from "../../../../images/card-foto-5.jpg";

function CardItem5(props) {
 return (
   <div className={styles.cardItem5}>
    <div className={styles.cardImage}>
     <img src={image} alt="image"/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span>Paradise</span>
     </div>
    </div>
    <div className="addressees-and-City">
     <div className={styles.city}>
      <span>Грозный</span>
     </div>
     <div className={styles.address}>
      <span>Старопромысловское ш, 13</span>
     </div>
    </div>
   </div>
 );
}

export default CardItem5;
