import React from 'react';
import HomePage from "./CardItems";
import {useSelector} from "react-redux";
import styles from "../../../common/Common.module.css"




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
         return<HomePage item={item} key={item.id} />

        })
      )
    }
   </div>
 );

}

export default Card;
