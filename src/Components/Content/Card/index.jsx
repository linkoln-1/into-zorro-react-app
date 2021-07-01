import React from 'react';
import styles from "../../../common/Common.module.css";
import {useSelector} from "react-redux";
import CardItem1 from "./CardItems/CardItem1";


function Card(props) {
 const items = useSelector(state => state.cafe.item);
 const loading = useSelector(state => state.cafe.loadingItem);



 return (
   <div className={styles.card}>
    {loading ? (
      <div>
       wait please, loading start!
      </div>
    ) :
      (
        items.map((item) => {
         return<CardItem1 item={item} key={item.id} />

        })
      )
    }
   </div>
 );

}

export default Card;
