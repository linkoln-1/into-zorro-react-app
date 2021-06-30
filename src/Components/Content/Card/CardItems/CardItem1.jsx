import React from 'react';
import styles from "../../../../common/Common.module.css";

function CardItem1(props) {
 return (
   <div className={styles.cardItem1}>
    <div className={styles.cardImage}>
     <img src={props.items[0]?.url} alt="photo"/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span>{props.items[0]?.title}</span>
     </div>
    </div>
    <div className="addressees">
     <div className={styles.address}>
      <span>{props.items[0]?.address}</span>
     </div>
    </div>
   </div>
 );
}

export default CardItem1;
