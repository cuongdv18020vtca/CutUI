import { createSlice } from '@reduxjs/toolkit'
const initialState = [
    {
        price: "0",
        type: "BASIC",
        content: "Lorem ipsum dolor sit",
        check: true
    },
    {
        price: "49",
        type: "STANDARD",
        content: "Lorem ipsum dolor sit",
        check: false
    },
    {
        price: "149",
        type: "ENTERPRISE",
        content: "Lorem ipsum dolor sit",
        check: true
    }
]
const packageSlice = createSlice({
    name: 'packages',
    initialState: initialState,
    reducers: {},
});
const { actions, reducer } = packageSlice;
export const { increment, decrement } = actions;
export default reducer;