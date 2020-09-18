import { put, call, takeLatest } from "redux-saga/effects"
import { fetchData } from "../api/api"
import { getpackages, getpackagesSuccess } from "../features/package/packageSlice";
function* getApi() {
    try {
        const data = yield call(fetchData);
        console.log(data);
        yield put(getpackagesSuccess(data))
    } catch (error) {
        console.log(error);
    }
}
export default function* watchPackages() {
    yield takeLatest(getpackages.type, getApi)
}