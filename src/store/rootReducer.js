import { combineReducers } from "@reduxjs/toolkit";

import { salesReducer } from './sales/sales.reducer';
import { customersReducer } from './customer/customer.reducer';
import { employeesReducer } from './employee/employee.reducer';
import { laundryPackagesReducer } from './laundry_package/laundry_package.reducer';
import { paymentTypesReducer } from './payment_type/payment_type.reducer';

const rootReducer = combineReducers({
    sales: salesReducer,
    customers: customersReducer,
    employees: employeesReducer,
    laundryPackages: laundryPackagesReducer,
    paymentTypes: paymentTypesReducer,
});

export default rootReducer;