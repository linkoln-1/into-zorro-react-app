import Header from "../Components/Header/Header";
import Card from "../Components/Content/Card";
import Footer from "../Components/Footer/Footer";
import styles from "./Common.module.css";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {LoadItems} from "../Components/Content/Card/CardReducer/actions";
import Registration from '../Components/authorization'
import Login from '../Components/Login'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'




function App() {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(LoadItems())
 },[])



  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route path='/registration' component={Registration}/>
        <Route path='/login' component={Login}/>
      </Switch>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
