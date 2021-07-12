import React from "react";
import HomePage from "./CardItems";
import { useSelector } from "react-redux";
import styles from "../../../common/Common.module.css";
import { Route, Switch } from "react-router-dom";
import Content from "./DetailedDescription/Content";
import Login from "../../authorization";
import StarRating from "./rating/StarRating";

function Card(props) {
 const items = useSelector(state => state.cafe.item);
 const loading = useSelector(state => state.cafe.loadingItem);
 const ratingItems = useSelector(state => state.ratinges.rating);
 const apRating = ratingItems.map((ratines) => {
  return ratines.rating;
 })
 const summRating = apRating.reduce((item, value) => {
  return parseInt(item) + value
 },0)
const itogTotal = summRating / 5;



 const Rating = <StarRating  rating={itogTotal}/>;

  return (
    <div className={styles.card}>
      <Switch>
        <Route exact path="/registration">
          <Login />
        </Route>

        <Route exact path="/">
          {loading ? (
            <div>Loading is Start! Wait Please!</div>
          ) : (
            items.map((item) => {
              return (
                <HomePage item={item} Rating={Rating} key={item.id} />
              )
            })
          )}
        </Route>
        <Route exact path="/:id?">
          <Content />
        </Route>
      </Switch>
    </div>
  );
}

export default Card;
