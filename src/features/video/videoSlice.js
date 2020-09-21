import { createSlice } from "@reduxjs/toolkit";
const videoSlice = createSlice({
  name: "video",
  initialState: {
    listVideo: [],
  },
  reducers: {
    getVideo: (state) => {
      return state;
    },
    getVideoSuccess: (state, action) => {
      return { ...state, listVideo: action.payload.listVideo };
    },
  },
});
const { actions, reducer } = videoSlice;
export const { getVideo, getVideoSuccess } = actions;
export default reducer;
