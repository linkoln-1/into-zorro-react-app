import React from 'react';
import styles from "../../../../../common/Common.module.css";
import map from "../../../images/Screenshot_1 2.png";

function LocationMap(props) {
 return (
   <div>
    <div className={styles.tittleOfMap}>
     <span>Кофейня на карте</span>
    </div>
    <div className="map-location">
     <img src={map} alt=""/>
    </div>
   </div>
 );
}

export default LocationMap;
