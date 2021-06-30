import React from 'react';
import styles from "../../../../common/Common.module.css";

function CardItem2(props) {
 return (
   <div className={styles.cardItem2}>
    <div className={styles.cardImage}>
     <img src={props.items[1]?.url} alt=""/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span>{props.items[1]?.title}</span>
     </div>
    </div>
    <div className="addressees">
     <div className={styles.address}>
      <span>{props.items[1]?.address}</span>
     </div>
    </div>
   </div>
 );
}

export default CardItem2;
