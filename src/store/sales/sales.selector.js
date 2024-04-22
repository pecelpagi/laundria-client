import { createSelector } from 'reselect';
import { currency, reformatDateTimeAsText } from '../../utils';

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

const selectUnprocessedSalesReducer = state => state.unprocessedSales;

const selectUnprocessedSalesRawData = createSelector(
    [selectUnprocessedSalesReducer],
    (unprocessedSalesReducer) => unprocessedSalesReducer.data
);

export const selectUnprocessedSalesData = createSelector(
    [selectUnprocessedSalesRawData],
    (unprocessedSalesData) => unprocessedSalesData.map(x => ({
        ...x,
        total: currency(x.total),
        createdAt: reformatDateTimeAsText(x.created_at),
    }))
); 

export const selectUnprocessedSalesIsLoading = createSelector(
    [selectUnprocessedSalesReducer],
    (unprocessedSalesReducer) => unprocessedSalesReducer.isLoading
);
