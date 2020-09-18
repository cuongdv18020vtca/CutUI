import { createSlice } from '@reduxjs/toolkit'
const listPackage = [
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
    initialState: {
        listPackage: []
    },
    reducers: {
        getData: (state, action) => ({ ...state, listPackage })
    },
});
const { actions, reducer } = packageSlice;
export const { getData } = actions;
export default reducer;