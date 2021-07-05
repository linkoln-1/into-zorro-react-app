import React from "react";
import HomePage from "./CardItems";
import { useSelector } from "react-redux";
import styles from "../../../common/Common.module.css";
import { Route, Switch } from "react-router-dom";
import Content from "./DetailedDescription/Content";
import Login from "../../authorization";

function Card(props) {
  const items = useSelector((state) => state.cafe.item);
  const loading = useSelector((state) => state.cafe.loadingItem);

  return (
    <div className={styles.card}>
      <Switch>
        {/*Вежри, это вне плановая верстка моя, Тимлида Али. Регистрация не рабочая,я просто хотел
          проверить, все ли хорошо будет работать при переключении по кнопке регистрация.
          Когда Алисхан все закончит, он добавит свою верстку вместо моей.
          Если будете искать Link, то он находиться в папке /Components/Header/Header.
          */}
        <Route exact path="/registration">
          <Login />
        </Route>

        <Route exact path="/">
          {loading ? (
            <div>Loading is Start! Wait Please!</div>
          ) : (
            items.map((item) => {
              return <HomePage item={item} key={item.id} />;
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
