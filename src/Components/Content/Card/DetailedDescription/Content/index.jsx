import React from "react";
import styles from "../../../../../common/Common.module.css";
import Map from "../Header/Map";
import ImageCafe from "./ImageCafe";
import InfoCafe from "./InfoCafe";
import LocationMap from "./LocationMap";


function Content(props) {


  return (
    <div className={styles.index}>
      <ImageCafe />
        <Map  />
      <InfoCafe />
      <LocationMap />
    </div>
  );
}

export default Content;
