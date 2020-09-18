import { call, put, takeLates } from 'redux-saga/effects'
import { fetchData } from '../api/api'
import { getVideo, getVideoSuccess } from '../features/video/videoSlice'

function* getApi() {
    try {
        const data = yield call(fetchData)
        yield put(getVideoSuccess(data))
    } catch (error) {
        console.log(error);
    }
}
export default function* watchVideo() {
    yield put(watchVideo.prototype, getApi)
}