import React from 'react';
import styles from "../../common/Common.module.css";
import LogoText from "./LogoText";
import {NavLink, Route} from "react-router-dom";

function Header() {
 return (
   <div className={styles.header}>
    <Route exact to="/home">
     <LogoText />
    </Route>
    {/* Тут будут кнопки входа и регистрации, поэтому просто напишу текст */}
    <div className="sign-up-login">
      <div className='nav__login'><NavLink to='/Login'>Войти</NavLink></div>
      <span>или</span>
      <div className='nav__registration'><NavLink to='/Registration'>Зарегестрироваться</NavLink></div>
    </div>

   </div>
 );
}

export default Header;
