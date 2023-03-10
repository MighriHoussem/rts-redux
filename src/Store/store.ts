import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";

import RootReducer from "./reducers";


const store = createStore(RootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;