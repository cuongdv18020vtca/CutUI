import { createSlice } from '@reduxjs/toolkit'
const initialState = [
    {
        img: "https://1503641826.rsc.cdn77.org/Media/ekcpwfoeygsvehpfempkcbvyz_usermedia.png",
        name: "Joey Higgins",
        department: " CEO Higgins&Geox ",
        content: "Praesent et purus ac libero euismod egestas. Aliquam feugiat luctus eros eget maecenas semper pulvinar. tiam in auctor tortor. Aliquam vulputate risus placerat congue ornare. Donec semper odio non efficitur congue."
    },
    {
        img: "https://1503641826.rsc.cdn77.org/Media/tqqkfyxwtevculhlwopeiswos_usermedia.png",
        name: "Joey Higgins",
        department: "CEO Higgins&Geox ",
        content: "Praesent et purus ac libero euismod egestas. Aliquam feugiat luctus eros eget maecenas semper pulvinar. tiam in auctor tortor. Aliquam vulputate risus placerat congue ornare. Donec semper odio non efficitur congue."
    },
    {
        img: "https://1503641826.rsc.cdn77.org/Media/clrsditnfmpakuydorbaptatt_usermedia.png",
        name: "Joey Higgins",
        department: "CEO Higgins&Geox ",
        content: "Praesent et purus ac libero euismod egestas. Aliquam feugiat luctus eros eget maecenas semper pulvinar. tiam in auctor tortor. Aliquam vulputate risus placerat congue ornare. Donec semper odio non efficitur congue."
    },

]
const customerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers: {},
});
const { actions, reducer } = customerSlice;
export const { increment, decrement } = actions;
export default reducer;