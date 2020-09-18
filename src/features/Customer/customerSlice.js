import { createSlice } from '@reduxjs/toolkit'
const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        listCustomer: []
    },
    reducers: {
        getCustomer: (state, action) => {
            return state;
        },
        getCustomerSuccess: (state, action) => {
            return { ...state, listCustomer: action.payload.listCustomer }
        }
    },
});
const { actions, reducer } = customerSlice;
export const { getCustomer, getCustomerSuccess } = actions;
export default reducer;