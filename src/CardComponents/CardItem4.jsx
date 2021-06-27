import React from 'react';
import styles from "../common/Common.module.css";
import image from "../images/card-foto-4.jpg";

function CardItem4(props) {
 return (
   <div className={styles.cardItem4}>
    <div className={styles.cardImage}>
     <img src={image} alt="image"/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span>Tutti Frutti SummerLove</span>
     </div>
     <div className={styles.tittle2}>
      <span>Кафе</span>
     </div>
    </div>
    <div className="addressees-and-City">
     <div className={styles.city}>
      <span>Грозный</span>
     </div>
     <div className={styles.address}>
      <span>просп. Ахмат-Кадырова, 40, ТРК Гранд-Парк</span>
     </div>
    </div>
   </div>
 );
}

export default CardItem4;
