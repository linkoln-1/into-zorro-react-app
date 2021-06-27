import React from 'react';
import styles from "../common/Common.module.css";
import image from "../images/card-foto-8.webp";

function CardItem8(props) {
 return (
   <div className={styles.cardItem8}>
    <div className={styles.cardImage}>
     <img src={image} alt="image"/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span>Асса</span>
     </div>
     <div className={styles.tittle2}>
      <span>Чеченская кухня</span>
     </div>
    </div>
    <div className="addressees-and-City">
     <div className={styles.city}>
      <span>Грозный</span>
     </div>
     <div className={styles.address}>
      <span>Абузара Айдамирова, 192</span>
     </div>
    </div>
   </div>
 );
}

export default CardItem8;
