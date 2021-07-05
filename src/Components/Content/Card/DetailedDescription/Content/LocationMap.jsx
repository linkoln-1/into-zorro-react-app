import React from "react";
import styles from "../../../../../common/Common.module.css";

function LocationMap(props) {
  return (
    <div>
      <div className={styles.tittleOfMap}>
        <span>Кофейня на карте</span>
      </div>
      <div className="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12751.629984178082!2d41.9660986954004!3d45.03162259068722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f9008d337c9c0f%3A0x315d2fb0e5b23519!2sCoffee%20Travel!5e0!3m2!1sru!2sru!4v1625427438195!5m2!1sru!2sru"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default LocationMap;
