import { combineReducers } from "@reduxjs/toolkit";

import { salesReducer } from './sales/sales.reducer';
import { customersReducer } from './customer/customer.reducer';
import { employeesReducer } from './employee/employee.reducer';

const rootReducer = combineReducers({
    sales: salesReducer,
    customers: customersReducer,
    employees: employeesReducer,
});

export default rootReducer;