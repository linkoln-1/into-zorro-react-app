import Header from "./../Components/Header/Header"
import Routes from "../Components/Content/Card";
import Footer from "../Components/Footer/Footer";
import styles from "./Common.module.css";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import {loadItems} from "../Components/Content/Card/CardItems/actions";
import {loadAddress} from "../redux/addresessReducer/actions";
import {loadBigImage} from "../redux/BigImageReducer/actions";
import {loadContactInfo} from "../redux/ContactInfoReducer/actions";
import {loadRatings} from "../redux/RatingReducer/actions";
import { loadReviews } from '../Components/Reviews/actions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
    dispatch(loadAddress());
    dispatch(loadBigImage());
    dispatch(loadContactInfo());
    dispatch(loadRatings());
    dispatch(loadReviews());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
