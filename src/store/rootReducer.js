import { combineReducers } from "@reduxjs/toolkit";

import { salesReducer } from './sales/sales.reducer';
import { customersReducer } from './customer/customer.reducer';
import { employeesReducer } from './employee/employee.reducer';
import { laundryPackagesReducer } from './laundry_package/laundry_package.reducer';

const rootReducer = combineReducers({
    sales: salesReducer,
    customers: customersReducer,
    employees: employeesReducer,
    laundryPackages: laundryPackagesReducer,
});

export default rootReducer;