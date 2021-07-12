import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import Card from "../Components/Content/Card/CardItems/cardReducer";
import reviewsReduser from '../Components/Reviews/reviewsReduser'
import usersReduser from '../Components/Reviews/Users/usersReduser'

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  cafe: Card,
  reviews: reviewsReduser,
  users: usersReduser
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));



export default store;
