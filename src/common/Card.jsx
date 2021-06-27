import React from 'react';
import styles from "./Common.module.css";
import CardItem1 from "../CardComponents/CardItem1";
import CardItem2 from "../CardComponents/CardItem2";
import CardItem3 from "../CardComponents/CardItem3";
import CardItem4 from "../CardComponents/CardItem4";
import CardItem5 from "../CardComponents/CardItem5";
import CardItem6 from "../CardComponents/CardItem6";
import CardItem7 from "../CardComponents/CardItem7";
import CardItem8 from "../CardComponents/CardItem8";

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
