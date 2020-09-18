import { createSlice } from '@reduxjs/toolkit'
const featureSlice = createSlice({
    name: 'feature',
    initialState: {
        listFeature: []
    },
    reducers: {
        getFeature: (state) => {
            return state
        },
        getFeatureSuccess: (state, action) => {
            return { ...state, listFeature: action.payload.listFeature }
        }
    },
});
const { actions, reducer } = featureSlice;
export const { getFeature, getFeatureSuccess } = actions;
export default reducer;