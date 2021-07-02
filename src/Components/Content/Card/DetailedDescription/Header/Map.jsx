import React from 'react';
import styles from "../../../../../common/Common.module.css"
import image from "../../../images/image 8.png";
import clock from "../../../images/image 9.png"

function Map(props) {
 return (
   <div className={styles.ClockMap}>
    <div className={styles.addresses}>
     <img src={image} alt=""/>
     <span>Грозный, Димаева, 14</span>
    </div>
    <div className={styles.clock}>
     <img src={clock} alt=""/>
     <span>Фактический график ресторана может отличаться от указанного</span>
    </div>
   </div>
 );
}

export default Map;
