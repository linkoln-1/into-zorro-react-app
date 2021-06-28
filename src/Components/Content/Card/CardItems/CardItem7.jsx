import React from 'react';
import styles from "../../../../common/Common.module.css";
import image from "../../../../images/card-foto-7.jpg";

function CardItem7(props) {
 return (
   <div className={styles.cardItem7}>
    <div className={styles.cardImage}>
     <img src={image} alt="image"/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span>Роял Бургер</span>
     </div>
    </div>
    <div className="addressees-and-City">
     <div className={styles.city}>
      <span>Грозный</span>
     </div>
     <div className={styles.address}>
      <span>Лорсанова, 10</span>
     </div>
    </div>
   </div>
 );
}

export default CardItem7;
