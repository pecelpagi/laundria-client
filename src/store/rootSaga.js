import { all, call } from 'redux-saga/effects';
import { salesSaga } from './sales/sales.saga';

function* rootSaga() {
    yield all([call(salesSaga)]);
}

export default rootSaga;