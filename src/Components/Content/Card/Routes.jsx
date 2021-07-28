import React from 'react';
import HomePage from '../HomePage/HomePage';
import styles from '../../../common/Common.module.css';
import { Route, Switch } from 'react-router-dom';
import Content from './DetailedDescription/Content';
import AddCafe from '../../Header/AddCafe/AddCafe';
import Registration from '../../Registration/Registration';
import Login from "../../Login";

function Routes(props) {
  return (
    <div className={styles.card}>
      <Switch>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/auth">
          <Login />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/*Сделаю временное добавление заведении, пока что будет работать для всех,когда
     авторизация и регистрация закончиться сделаю так чтобы была возможность
     добавления только для авторизованных пользователей*/}
        <Route exact path="/add-cafe">
          <AddCafe />
        </Route>
        <Route exact path="/:id?">
          <Content />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
