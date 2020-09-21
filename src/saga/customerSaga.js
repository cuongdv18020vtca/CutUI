import { call, put, takeLatest } from "redux-saga/effects"
import { fetchData } from "../api/api"
import { getCustomer, getCustomerSuccess } from "../features/Customer/customerSlice";
function* getApi() {
    try {
        const data = yield call(fetchData);
        console.log(fetchData());
        console.log(fetchData);
        yield put(getCustomerSuccess(data));
    } catch (error) {
        console.log(error);
    }
}
export default function* watchCustomer() {
    yield takeLatest(getCustomer.type, getApi)
}