import React from "react";
import styles from "../../common/Common.module.css";
import logo from "../Content/images/logo.jpg";
import { Link } from "react-router-dom";

function LogoText(props) {
  return (
    <Link to="/">
      <div className={styles.logoText}>
        <div className={styles.logo}>
          <img src={logo} alt="images" />
        </div>
        <div className={styles.text}>
          <span>Рестораны и Кафе</span>
        </div>
      </div>
    </Link>
  );
}

export default LogoText;
