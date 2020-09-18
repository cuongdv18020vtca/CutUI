import { WATCH_VIDEO, BUY_TEMPLATE } from '../actionTypes/header'
export const elementReducer = (state = "", action) => {
    switch (action.type) {
        case WATCH_VIDEO:

            return state;
        case BUY_TEMPLATE:
            return state

        default:
            return state

    }
}