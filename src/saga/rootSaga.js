import { all } from "redux-saga/effects";
import watchCharacteristic from './characteristicSaga'
import watchSubscription from './subscriptionSaga';
import watchFeature from './featureSaga'
import watchVideo from "./videoSaga";
export default function* () {
    yield all([
        watchCharacteristic(),
        watchSubscription(), ,
        watchFeature(),
        watchVideo()
    ])
}