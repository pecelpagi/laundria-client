import { all, call } from 'redux-saga/effects';
import { salesSaga } from './sales/sales.saga';
import { customersSaga } from './customer/customer.saga';
import { employeesSaga } from './employee/employee.saga';
import { laundryPackagesSaga } from './laundry_package/laundry_package.saga';

function* rootSaga() {
    yield all([call(salesSaga), call(customersSaga), call(employeesSaga), call(laundryPackagesSaga)]);
}

export default rootSaga;