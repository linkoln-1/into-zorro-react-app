import React from "react";
import styles from "../../common/Common.module.css";
import LogoText from "./LogoText";
import { Link, Route } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <Route exact to="/">
        <LogoText />
      </Route>

      <div className="sign-up-login">
        {/*Как я и сказал Линк находится тут*/}
        <Link to="/registration">Регистрация</Link>
      </div>
    </div>
  );
}

export default Header;
