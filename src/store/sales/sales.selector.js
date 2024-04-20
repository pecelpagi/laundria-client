import { createSelector } from 'reselect';

const selectSalesReducer = state => state.sales;

export const selectSalesData = createSelector(
    [selectSalesReducer],
    (salesReducer) => salesReducer.data
);

export const selectSalesMeta = createSelector(
    [selectSalesReducer],
    (salesReducer) => salesReducer.meta  
);

export const selectSalesIsLoading = createSelector(
    [selectSalesReducer],
    (salesReducer) => salesReducer.isLoading
);