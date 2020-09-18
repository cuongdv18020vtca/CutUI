import { createSlice } from '@reduxjs/toolkit'
const initialState = [
    {
        icon: "https://1503641826.rsc.cdn77.org/Media/lumjnqfwsisugrdyqrnsuqian_usermedia.png",
        content: "Donec scelerisque finibus dui, in pretium ligula pharetra ut. Phasellus mattis lacus vel sagittis consequat. Nulla vitae libero placerat, molestie sapien sed, blandit nibh. Maecenas non vehicula purus."
    },
    {
        icon: "https://1503641826.rsc.cdn77.org/Media/lumjnqfwsisugrdyqrnsuqian_usermedia.png",
        content: "Donec scelerisque finibus dui, in pretium ligula pharetra ut. Phasellus mattis lacus vel sagittis consequat. Nulla vitae libero placerat, molestie sapien sed, blandit nibh. Maecenas non vehicula purus."
    },
    {
        icon: "https://1503641826.rsc.cdn77.org/Media/lumjnqfwsisugrdyqrnsuqian_usermedia.png",
        content: "Donec scelerisque finibus dui, in pretium ligula pharetra ut. Phasellus mattis lacus vel sagittis consequat. Nulla vitae libero placerat, molestie sapien sed, blandit nibh. Maecenas non vehicula purus."
    }
]
const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: initialState,
    reducers: {},
});
const { actions, reducer } = subscriptionSlice;
export const { increment, decrement } = actions;
export default reducer;