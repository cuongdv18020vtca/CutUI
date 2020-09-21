import characteristic from "../features/Characteristic/characteristicSlice";

import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import subscription from "../features/subscription/subscriptionSlice";
import feature from "../features/Feature/featureSlice";
import video from "../features/video/videoSlice";
import packages from "../features/package/packageSlice";
import customer from "../features/Customer/customerSlice";
import rootSaga from "../saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  characteristic,
  subscription,
  feature,
  video,
  packages,
  customer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
