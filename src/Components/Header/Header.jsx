import React from "react";
import styles from "../../common/Common.module.css";
import LogoText from "./LogoText";
<<<<<<< HEAD
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
=======
import { Route, Switch } from "react-router-dom";
import Authorization from "../../Components/Content/Card/DetailedDescription/Header/Authorization";
import Login from "../authorization/index";

function Header() {
  return (
    <div className={styles.header}>
      <Route exact to="/">
        <LogoText />
      </Route>

      {/* Тут будут кнопки входа и регистрации, поэтому я пока что
     сделал изменения с главной на переключенной странице */}
      <div className="sign-up-login">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/:routeId?" component={Authorization} />
        </Switch>
      </div>
>>>>>>> master
    </div>
  );
}

export default Header;
