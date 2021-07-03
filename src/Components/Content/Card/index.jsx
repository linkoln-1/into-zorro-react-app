import React from 'react';
import HomePage from "./CardItems";
import {useSelector} from "react-redux";
import styles from "../../../common/Common.module.css"
import {Link, Route, Switch} from "react-router-dom";
import Content from "./DetailedDescription/Content";
import Header from "../../Header/Header";
import Authorization from "./DetailedDescription/Header/Authorization";






function Card(props) {
 const items = useSelector(state => state.cafe.item);
 const loading = useSelector(state => state.cafe.loadingItem);



 return (
   <div className={styles.card}>
    <Switch>
     <Route exact path="/">
      {loading ? (
        <div>Loading is Start! Wait Please!</div>
      ) :
        (
          items.map((item) => {
           return (
             <HomePage item={item} key={item.id} />
           )
      }))}
     </Route>
     <Route exact path="/:routeId?">
      <Content />
     </Route>
    </Switch>
   </div>
 );

}

export default Card;
