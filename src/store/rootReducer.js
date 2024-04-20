import { combineReducers } from "@reduxjs/toolkit";

import { salesReducer } from './sales/sales.reducer';

const rootReducer = combineReducers({
    sales: salesReducer
});

export default rootReducer;