
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {LoadItems} from "../Components/Content/Card/CardReducer/actions";
import Registration from '../Components/authorization'
import Login from '../Components/Login'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'


// import BlockReview from '../Components/Content/Card/Reviews/BlockReviews/BlockReview'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadItems());
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
