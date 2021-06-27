import React from 'react';
import styles from "../common/Common.module.css";
import LogoText from "../HeaderComponents/LogoText";
import Menu from "../HeaderComponents/Menu";

function Header() {
 return (
   <div className={styles.header}>
      <LogoText />
      <Menu />
    {/* Тут будут кнопки входа и регистрации, поэтому просто напишу текст */}
    <div className="sign-up-login">
     <span> Войти или Зарегестрироваться</span>
    </div>

   </div>
 );
}

export default Header;
