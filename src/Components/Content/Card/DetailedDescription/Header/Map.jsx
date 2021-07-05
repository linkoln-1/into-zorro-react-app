import React from "react";
import styles from "../../../../../common/Common.module.css";
import image from "../../../images/image 8.png";

function Map(props) {
  return (
    <div className={styles.ClockMap}>
      <div className={styles.addresses}>
        <img src={image} alt="" />
        <span>{props.item.location}</span>
      </div>
    </div>
  );
}

export default Map;
