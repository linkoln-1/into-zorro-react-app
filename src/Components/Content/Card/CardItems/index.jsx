import React from "react";
import styles from "../../../../common/Common.module.css";
import { NavLink } from "react-router-dom";

function HomePage(props) {
  return (
    <div className={styles.cardItem1}>
      <NavLink to={`${props.item.id}`} className={styles.HomePage}>
        <div className={styles.cardImage}>
          <img src={props.item.url} alt="images" />
        </div>
        <div className="card-tittle">
          <div className={styles.tittle1}>
            <span>{props.item.title}</span>
          </div>
        </div>
      </NavLink>
      <div className="addressees">
        <div className={styles.address}>
          <span>{props.item.address}</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
