import { all, call } from 'redux-saga/effects';
import { salesSaga } from './sales/sales.saga';
import { customersSaga } from './customer/customer.saga';
import { employeesSaga } from './employee/employee.saga';
import { laundryPackagesSaga } from './laundry_package/laundry_package.saga';
import { paymentTypesSaga } from './payment_type/payment_type.saga';

function* rootSaga() {
    yield all([
        call(salesSaga), call(customersSaga), call(employeesSaga),
        call(laundryPackagesSaga), call(paymentTypesSaga)
    ]);
}

export default rootSaga;