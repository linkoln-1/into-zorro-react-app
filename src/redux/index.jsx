import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import Card from "../Components/Content/Card/CardItems/cardReducer";
import addressess from "./addresessReducer";
import bigImages from "./BigImageReducer";
import ContactInfo from "./ContactInfoReducer";
import Rating from "./RatingReducer";
import reviewsReduser from '../Components/BlockReviews/reviewsReduser'
import usersReduser from '../Components/BlockReviews/Users/usersReduser'


const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  cafe: Card,
  addresses:addressess,
  bigimage:bigImages,
  contactinfo:ContactInfo,
  ratinges:Rating,
  reviews: reviewsReduser,
  users: usersReduser
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));



export default store;
