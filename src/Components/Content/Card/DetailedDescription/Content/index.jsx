import React from "react";
import styles from "../../../../../common/Common.module.css";
import Map from "../Header/Map";
import ImageCafe from "./ImageCafe";
import InfoCafe from "./InfoCafe";
import LocationMap from "./LocationMap";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";


function Content(props) {
 const location = useSelector(state => state.cafe.addresses);
 const id = parseInt(useParams().id)
 const filteredAddresses = location.filter(item => item.cafeId === id)
 const images = useSelector(state => state.cafe.BigImage);
 const filteredImages = images.filter(item => item.cafeId === id)
 const ContactInfo = useSelector(state => state.cafe.ContactInfo);
 const filteredContactInfo = ContactInfo.filter(item => item.cafeId === id)

 const MapLocation = useSelector(state => state.cafe.Map);







  return (
    <div className={styles.index}>
     {filteredImages.map((image) => {
      return  <ImageCafe image={image} key={image.id}/>
     })}
     {filteredAddresses.map((item) => {
      return <Map item={item} key={item.id} />
     })}

     {filteredContactInfo.map((item) => {
      return <InfoCafe item={item} key={item.id} />
     })}

     <LocationMap />

    </div>
  );
}

export default Content;
