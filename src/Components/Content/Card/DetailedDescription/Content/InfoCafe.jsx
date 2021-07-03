import React from 'react';
import styles from "../../../../../common/Common.module.css";
import { useSelector } from 'react-redux'

function InfoCafe(props) {
 const items = useSelector(state => state.cafe.item);


 return (
   <div className={styles.Info}>
    <section>
     <div className="contactInfo">
      <div className="tittle">
       <span>Контактная информация</span>
      </div>
      <div className={styles.infoBlock}>

       <div className={styles.address}>
        <div><span>адрес</span></div>
        <div><span>{items.address}</span></div>
       </div>

       <div className={styles.clockWork}>
        <div><span>время работы</span></div>
        <div><span>пн-вс 8.00–0.00</span></div>
       </div>


       <div className={styles.numberUs}>
        <div><span>телефон :</span></div>
        <div><span>+7 928 894 90 90</span></div>
       </div>

       <div className="official-site">
        <div><span>официальный сайт</span></div>
        <div><span>www.travelers-coffee.com</span></div>
       </div>
      </div>
     </div>
    </section>
   </div>
 );
}

export default InfoCafe;
