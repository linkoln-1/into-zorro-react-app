import React from 'react';
import styles from "../../common/Common.module.css";
import LogoText from "./LogoText";
import {Link, Route, Switch} from "react-router-dom";
import Authorization from "../../Components/Content/Card/DetailedDescription/Header/Authorization";
import Login from "../authorization/index";


function Header() {
 return (
   <div className={styles.header}>
    <Route exact to="/">
     <LogoText />
    </Route>



    {/* Тут будут кнопки входа и регистрации, поэтому просто напишу текст */}
    <div className="sign-up-login">
     <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/:routeId?" component={Authorization} />
     </Switch>
    </div>

   </div>
 );
}

export default Header;
