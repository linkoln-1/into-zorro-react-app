import React from 'react';
import HomePage from "./CardItems";
import {useSelector} from "react-redux";
import styles from "../../../common/Common.module.css"
import {Link, Route, Switch} from "react-router-dom";
import DetailedDescription from "./DetailedDescription";





function Card(props) {
 const items = useSelector(state => state.cafe.item);
 const loading = useSelector(state => state.cafe.loadingItem);

console.log(items)


 return (
   <div className={styles.card}>
    {loading ? (
        <div>
         wait please, loading start!
        </div>
      ) :
      (
        items.map((item) => {
         return (
           <Route exact path="/:cafeId?">
            <HomePage item={item} key={item.id} />
           </Route>

           )
        })
      )
    }
   </div>
 );

}

export default Card;
