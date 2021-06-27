import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger/src";


const logger = createLogger({
 diff:true,
 collapsed: true,
})

export const store = createStore(
  combineReducers({}),
  applyMiddleware(thunk, logger)
)
