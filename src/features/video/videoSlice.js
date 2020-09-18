import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    title: "Watch the video and explore our features",
    content: "Praesent rutrum tristique nisl ut pretium. Nunc convallis nec mauris eu fermentum. Fusce faucibus leo sit amet nisi venenatis, nec scelerisque ante euismod. Ut justo pharetra sollicitudin dignissim, iaculis vitae nunc. Vestibulum egestas finibus sit lobortis. Donec porttitor nisl eu nisi lobortis."
}
const videoSlice = createSlice({
    name: 'video',
    initialState: initialState,
    reducers: {},
});
const { actions, reducer } = videoSlice;
export const { increment, decrement } = actions;
export default reducer;