import { all, call } from 'redux-saga/effects';
import { salesSaga } from './sales/sales.saga';
import { customersSaga } from './customer/customer.saga';

function* rootSaga() {
    yield all([call(salesSaga), call(customersSaga)]);
}

export default rootSaga;