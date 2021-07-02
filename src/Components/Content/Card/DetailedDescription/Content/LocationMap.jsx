import React from 'react';

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
