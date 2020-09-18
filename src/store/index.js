
import characteristic from "../features/Characteristic/characteristicSlice";


import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import subscription from '../features/subscription/subscriptionSlice';
import feature from '../features/Feature/featureSlice';
import video from '../features/video/videoSlice';
import packgages from '../features/package/packageSlice'
import customer from '../features/Customer/customerSlice'
const reducer = combineReducers({
    characteristic,
    subscription,
    feature,
    video,
    packgages,
    customer

})

const store = configureStore({
    reducer,
})

export default store;