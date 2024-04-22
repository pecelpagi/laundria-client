import { combineReducers } from "@reduxjs/toolkit";

import { salesReducer, unprocessedSalesReducer } from './sales/sales.reducer';
import { customersReducer } from './customer/customer.reducer';
import { employeesReducer } from './employee/employee.reducer';
import { laundryPackagesReducer } from './laundry_package/laundry_package.reducer';
import { paymentTypesReducer } from './payment_type/payment_type.reducer';
import { companyProfileReducer, myProfileReducer } from './user/user.reducer';

const rootReducer = combineReducers({
    sales: salesReducer,
    customers: customersReducer,
    employees: employeesReducer,
    laundryPackages: laundryPackagesReducer,
    paymentTypes: paymentTypesReducer,
    companyProfile: companyProfileReducer,
    myProfile: myProfileReducer,
    unprocessedSales: unprocessedSalesReducer,
});

export default rootReducer;