import { createSlice } from '@reduxjs/toolkit'

const characteristicSlice = createSlice({
    name: 'characteristic',
    initialState: {
        listCharacteristic: []
    },
    reducers: {
        getCharacteristic: (state) => {
            return state
        },

        getCharacteristicSuccess: (state, action) => {
            return { ...state, listCharacteristic: action.payload.listCharacteristic }
        },
    },
});
const { actions, reducer } = characteristicSlice;
export const { getCharacteristic, getCharacteristicSuccess } = actions;
export default reducer;