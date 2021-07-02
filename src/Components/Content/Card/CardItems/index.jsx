import React from 'react';
import styles from "../../../../common/Common.module.css";

function HomePage (props) {
 return (
   <div className={styles.cardItem1}>
    <div className={styles.cardImage}>
     <img src={props.item.url} alt="photo"/>
    </div>
    <div className="card-tittle">
     <div className={styles.tittle1}>
      <span>{props.item.title}</span>
     </div>
    </div>
    <div className="addressees">
     <div className={styles.address}>
      <span>{props.item.address}</span>
     </div>
    </div>
   </div>
 );
}

export default HomePage;
