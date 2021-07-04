import React from "react";
import styles from "../../../../common/Common.module.css";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div className={styles.cardItem1}>
      <Link to={`${props.item.id}`}>
        <div className={styles.cardImage}>
          <img src={props.item.url} alt="images" />
        </div>
        <div className="card-tittle">
          <div className={styles.tittle1}>
            <span>{props.item.title}</span>
          </div>
        </div>
      </Link>
      <div className="addressees">
        <div className={styles.address}>
          <span>{props.item.address}</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
