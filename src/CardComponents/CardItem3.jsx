import React from 'react';
import styles from "../common/Common.module.css";
import image from "../images/card-foto-3.jpg";

function CardItem3(props) {
 return (
   <div className={styles.cardItem3}>
    <div className={styles.cardImage}>
     <img src={image} alt="image"/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span>Япона Хата</span>
     </div>
     <div className={styles.tittle2}>
      <span>Японская кухня</span>
     </div>
    </div>
    <div className="addressees-and-City">
     <div className={styles.city}>
      <span>Грозный</span>
     </div>
     <div className={styles.address}>
      <span>Кабардинская,26</span>
     </div>
    </div>
   </div>
 );
}

export default CardItem3;
