import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger/src";
import Card from "../Components/Content/Card/CardReducer/cardReducer";
import reviewsReduser from '../Components/Content/Card/Reviews/reviewsReduser'




const logger = createLogger({
 diff:true,
 collapsed: true,
})

const rootReducer = combineReducers({
 cafe:Card,
 reviews: reviewsReduser
})

const store = createStore(rootReducer,applyMiddleware(thunk, logger))


export default store;

