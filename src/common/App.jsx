import Header from "./../Components/Header/Header"
import Card from "../Components/Content/Card";
import Footer from "../Components/Footer/Footer";
import styles from "./Common.module.css";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import {LoadItems} from "../Components/Content/Card/CardItems/actions";
import {LoadAddress} from "../Components/Content/Card/addresessReducer/actions";
import {LoadBigImage} from "../Components/Content/Card/BigImageReducer/actions";
import {LoadContactInfo} from "../Components/Content/Card/ContactInfoReducer/actions";
import {LoadRatings} from "../Components/Content/Card/RatingReducer/actions";


// import BlockReview from '../Components/Content/Card/Reviews/BlockReviews/BlockReview'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadItems());
    dispatch(LoadAddress());
    dispatch(LoadBigImage());
    dispatch(LoadContactInfo());
    dispatch(LoadRatings());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header />
      <Card />
      <Footer />
      {/*<BlockReview />*/}
    </div>
  );
}

export default App;
