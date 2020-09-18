import { GET_STARTED } from '../actionTypes/subscription'
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
const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STARTED:
            return state;
        default:
            return state;
    }
}
export default subscriptionReducer;