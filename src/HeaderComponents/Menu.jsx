import React from 'react';
import styles from "../common/Common.module.css";

function Menu(props) {
 return (
   <div className={styles.navMenu}>
    <ul>
     <li><a href="#">Главная |</a></li>
     <li><a href="#"> Контакты |</a></li>
     <li><a href="#">О нас</a></li>
    </ul>
   </div>
 );
}

export default Menu;
