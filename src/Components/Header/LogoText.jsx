import React from 'react';
import styles from '../../common/Common.module.css';
import logo from '../Content/images/logo.jpg';
import { NavLink } from 'react-router-dom';

function LogoText(props) {
  return (
    <NavLink exact to="/" className={styles.HomePage}>
      <div className={styles.logoText}>
        <div className={styles.logo}>
          <img src={logo} alt="images" />
        </div>
        <div className={styles.text}>
          <span>Рестораны и Кафе</span>
        </div>
      </div>
    </NavLink>
  );
}

export default LogoText;
