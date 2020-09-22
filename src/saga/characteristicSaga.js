import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../api/api";
import {
  getCharacteristicSuccess,
  getCharacteristic,
} from "../features/Characteristic/characteristicSlice";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApi() {
  try {
    // do api call
    const data = yield call(fetchData);
    console.log(data);
    yield put(getCharacteristicSuccess(data));
  } catch (e) {
    console.log(e);
  }
}
export default function* watchCharacteristic() {
  yield takeLatest(getCharacteristic.type, getApi);
}
