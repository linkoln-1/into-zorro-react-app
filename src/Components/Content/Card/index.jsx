import React from 'react';
import styles from "../../../common/Common.module.css";
import CardItem1 from "./CardItems/CardItem1";
import CardItem2 from "./CardItems/CardItem2";
import CardItem3 from "./CardItems/CardItem3";
import CardItem4 from "./CardItems/CardItem4";
import CardItem5 from "./CardItems/CardItem5";
import CardItem6 from "./CardItems/CardItem6";
import CardItem7 from "./CardItems/CardItem7";
import CardItem8 from "./CardItems/CardItem8";

function Card() {
 return (
   <div className={styles.card}>
     <CardItem1 />
     <CardItem2 />
     <CardItem3 />
     <CardItem4 />
     <CardItem5 />
     <CardItem6 />
     <CardItem7 />
     <CardItem8 />
   </div>
 );
}

export default Card;
