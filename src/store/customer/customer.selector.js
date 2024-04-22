import { createSelector } from 'reselect';

const selectCustomersReducer = state => state.customers;

export const selectCustomersData = createSelector(
    [selectCustomersReducer],
    (customersReducer) => customersReducer.data
);

export const selectCustomersMeta = createSelector(
    [selectCustomersReducer],
    (customersReducer) => customersReducer.meta  
);

export const selectCustomersIsLoading = createSelector(
    [selectCustomersReducer],
    (customersReducer) => customersReducer.isLoading
);