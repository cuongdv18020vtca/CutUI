import { all } from "redux-saga/effects";
import watchCharacteristic from "./characteristicSaga";
import watchSubscription from "./subscriptionSaga";
import watchFeature from "./featureSaga";
import watchVideo from "./videoSaga";
import watchPackages from "./packagesSaga";
import watchCustomer from "./customerSaga";
export default function* () {
  yield all([
    watchCharacteristic(),
    watchSubscription(),
    watchFeature(),
    watchVideo(),
    watchPackages(),
    watchCustomer(),
  ]);
}
