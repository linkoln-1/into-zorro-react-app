import React from 'react';
import styles from "../common/Common.module.css";
import image from "../images/card-foto-6.png";

function CardItem6(props) {
 return (
   <div className={styles.cardItem6}>
    <div className={styles.cardImage}>
     <img src={image} alt="image"/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span>Andalus</span>
     </div>
     <div className={styles.tittle2}>
      <span>Халяльные рестораны</span>
     </div>
    </div>
    <div className="addressees-and-City">
     <div className={styles.city}>
      <span>Грозный</span>
     </div>
     <div className={styles.address}>
      <span>Чернышевского, 67</span>
     </div>
    </div>
   </div>
 );
}

export default CardItem6;
