import Header from "../Components/Header/Header";
import Card from "../Components/Content/Card";
import Footer from "../Components/Footer/Footer";
import styles from "./Common.module.css";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {LoadItems} from "../Components/Content/Card/CardReducer/actions";




function App() {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(LoadItems())
 },[])



  return (
    <div className={styles.container}>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
