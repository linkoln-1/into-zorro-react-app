import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import styles from "./Common.module.css";
import Card from "../Components/Content/Card";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {LoadItems} from "../Components/Content/Card/CardReducer/actions";
import Registration from '../Components/authorization'
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
      </Switch>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
