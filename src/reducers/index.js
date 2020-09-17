import section2Reducer from "./section2Reducer"
import { combineReducers } from 'redux';
import section3Reducer from "./section3Reducer"
import { section4Reducer } from "./section4Reducer";
import section5Reducer from "./section5Reducer";
import section6Reducer from "./section6Reducer";
import { section7Reducer } from "./section7Reducer";

const allReduders = combineReducers({
    section2: section2Reducer,
    section3: section3Reducer,
    section4: section4Reducer,
    section5: section5Reducer,
    section6: section6Reducer,
    section7: section7Reducer
})
export default allReduders