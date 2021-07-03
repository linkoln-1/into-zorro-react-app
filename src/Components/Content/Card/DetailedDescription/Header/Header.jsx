import React from 'react';
import LogoText from "./LogoText";
import Map from "./Map";
import styles from "../../../../../common/Common.module.css"
import Authorization from "./Authorization";

function Header(props) {
 return (
   <div className={styles.header}>
    <LogoText />
    <Authorization />

    <div className={styles.BigImage}>
     <div className={styles.image}><span>ТУТ ДОЛЖНА БЫТЬ КАРТИНКА ЗАВЕДЕНИЯ И ПРОЧАЯ ИНФА!</span> </div>
    </div>


    <Map />
   </div>
 );
}

export default Header;
