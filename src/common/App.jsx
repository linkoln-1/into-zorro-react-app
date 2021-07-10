import Header from "../Components/Header/Header";
import Card from "../Components/Content/Card";
import Footer from "../Components/Footer/Footer";
import styles from "./Common.module.css";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { LoadItems } from "../Components/Content/Card/CardItems/actions";

// import BlockReview from '../Components/Content/Card/Reviews/BlockReviews/BlockReview'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadItems());
    dispatch(LoadAddress());
    dispatch(LoadBigImage());
    dispatch(LoadContactInfo());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route path='/registration' component={Registration}/>
        <Route path='/login' component={Login}/>
      </Switch>
      <Card />
      <Footer />
      {/*<BlockReview />*/}
    </div>
  );
}

export default App;
