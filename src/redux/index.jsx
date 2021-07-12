import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import Card from "../Components/Content/Card/CardItems/cardReducer";
import addressess from "../Components/Content/Card/addresessReducer";
import bigImages from "../Components/Content/Card/BigImageReducer";
import ContactInfo from "../Components/Content/Card/ContactInfoReducer";
import Rating from "../Components/Content/Card/RatingReducer";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  cafe: Card,
  addresses:addressess,
  bigimage:bigImages,
  contactinfo:ContactInfo,
  ratinges:Rating
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));



export default store;
