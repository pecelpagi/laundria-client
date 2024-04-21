import { combineReducers } from "@reduxjs/toolkit";

import { salesReducer } from './sales/sales.reducer';
import { customersReducer } from './customer/customer.reducer';

const rootReducer = combineReducers({
    sales: salesReducer,
    customers: customersReducer,
});

export default rootReducer;