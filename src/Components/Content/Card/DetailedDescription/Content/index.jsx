import React from 'react';
import InfoCafe from "./InfoCafe";
import LocationMap from "./LocationMap";
import styles from "../../../../../common/Common.module.css"

function Content(props) {
 return (
   <div className={styles.index}>
    <InfoCafe />
    <LocationMap />
   </div>
 );
}

export default Content;
