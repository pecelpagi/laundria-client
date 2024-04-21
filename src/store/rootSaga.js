import { all, call } from 'redux-saga/effects';
import { salesSaga } from './sales/sales.saga';
import { customersSaga } from './customer/customer.saga';
import { employeesSaga } from './employee/employee.saga';

function* rootSaga() {
    yield all([call(salesSaga), call(customersSaga), call(employeesSaga)]);
}

export default rootSaga;