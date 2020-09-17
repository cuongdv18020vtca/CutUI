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
const section6Reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default section6Reducer;