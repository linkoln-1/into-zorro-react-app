import React from "react";
import styles from "../../../../../common/Common.module.css";


function LocationMap(props) {
  return (
    <div>
      <div className={styles.tittleOfMap}>
        <span>Кофейня на карте</span>
      </div>
      <div className="map-location">
       Тут должна быть карта!
      </div>
    </div>
  );
}

export default LocationMap;
