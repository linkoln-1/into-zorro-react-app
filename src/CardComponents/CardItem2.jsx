import React from 'react';
import styles from "../common/Common.module.css";
import image from "../images/card-foto-2.jpg";

function CardItem2(props) {
 return (
   <div className={styles.cardItem2}>
    <div className={styles.cardImage}>
     <img src={image} alt="image"/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span>Subway</span>
     </div>
     <div className={styles.tittle2}>
      <span>Фастфуд</span>
     </div>
    </div>
    <div className="addressees-and-City">
     <div className={styles.city}>
      <span>Грозный</span>
     </div>
     <div className={styles.address}>
      <span>просп. Ахмат-Хаджи-Кадырова, 37</span>
     </div>
    </div>
   </div>
 );
}

export default CardItem2;
