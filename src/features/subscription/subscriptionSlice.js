import { createSlice } from '@reduxjs/toolkit'

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: {
        listSubscription: []
    },
    reducers: {
        getSubscription: (state) => {
            return state;
        },
        getSubscriptionSuccess: (state, action) => {
            return { ...state, listSubscription: action.payload.listSubscription }
        }
    },
});
const { actions, reducer } = subscriptionSlice;
export const { getSubscription, getSubscriptionSuccess } = actions;
export default reducer;