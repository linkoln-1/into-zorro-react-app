import React from 'react';
import HomePage from "./CardItems";
import {useSelector} from "react-redux";
import styles from "../../../common/Common.module.css"
import { Route, Switch, useHistory } from "react-router-dom";
import Content from './DetailedDescription/Content'





function Card(props) {
 const items = useSelector(state => state.cafe.item);
 const loading = useSelector(state => state.cafe.loadingItem);

// console.log(items)


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
            <HomePage item={item} key={item.id} />
           )
        })
      )
    }
    <Switch>
      <Route exact path="/:routeId">
        <Content/>
      </Route>
    </Switch>
   </div>
 );

}

export default Card;
