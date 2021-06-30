import React from 'react';
import styles from "../../../common/Common.module.css";
import CardItem2 from "./CardItems/CardItem2";
import CardItem3 from "./CardItems/CardItem3";
import CardItem4 from "./CardItems/CardItem4";
import CardItem5 from "./CardItems/CardItem5";
import CardItem6 from "./CardItems/CardItem6";
import CardItem7 from "./CardItems/CardItem7";
import CardItem8 from "./CardItems/CardItem8";
import {useSelector} from "react-redux";
import CardItem1 from "./CardItems/CardItem1";


function Card(props) {
 const items = useSelector(state => state.cafe.item);
 const loading = useSelector(state => state.cafe.loadingItem);



 return (
   <div className={styles.card}>
    {loading === true ? "wait please!" :
      ( <CardItem1 items={items} />)}
     <CardItem2 items={items} />
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
