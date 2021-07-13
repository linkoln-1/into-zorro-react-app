import React from "react";
import HomePage from "../HomePage/HomePage";
import styles from "../../../common/Common.module.css";
import { Route, Switch } from "react-router-dom";
import Content from "./DetailedDescription/Content";
import Login from "../../authorization";

function Card(props) {
  return (
    <div className={styles.card}>
      <Switch>
        <Route exact path="/registration">
          <Login />
        </Route>
        <Route exact path="/">
         <HomePage />
        </Route>
        <Route exact path="/:id?">
          <Content />
        </Route>
      </Switch>
    </div>
  );
}

export default Card;
