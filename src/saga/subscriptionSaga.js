import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchData } from '../api/api';
import { getSubscription, getSubscriptionSuccess } from '../features/subscription/subscriptionSlice'

function* getApi() {
    try {
        const data = yield call(fetchData);
        yield put(getSubscriptionSuccess(data));
    } catch (error) {
        console.log(error);
    }
}
export default function* watchSubscription() {
    yield takeLatest(getSubscription.type, getApi)
}