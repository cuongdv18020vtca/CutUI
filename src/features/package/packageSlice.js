import { createSlice } from "@reduxjs/toolkit";
const packageSlice = createSlice({
  name: "packages",
  initialState: {
    listPackage: [],
  },
  reducers: {
    getpackages: (state) => {
      console.log("kkkk");
      return state;
    },
    getpackagesSuccess: (state, action) => {
      console.log(action.payload);
      return { ...state, listPackage: action.payload.listPackage };
    },
  },
});
const { actions, reducer } = packageSlice;
export const { getpackages, getpackagesSuccess } = actions;
export default reducer;
