import { call, put, takeLatest } from "redux-saga/effects"
import { fetchData } from '../api/api'
import { getFeature, getFeatureSuccess } from '../features/Feature/featureSlice'

function* getApi() {
    try {
        const data = yield call(fetchData);
        console.log(data);
        yield put(getFeatureSuccess(data));
    } catch (error) {
        console.log(error);
    }
}
export default function* watchFeature() {
    yield takeLatest(getFeature.type, getApi)
}