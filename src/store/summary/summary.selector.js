import { createSelector } from 'reselect';

const selectSummaryReducer = state => state.summary;

export const selectSummaryData = createSelector(
    [selectSummaryReducer],
    (summaryReducer) => summaryReducer.data
);

export const selectSummaryIsLoading = createSelector(
    [selectSummaryReducer],
    (summaryReducer) => summaryReducer.isLoading
);

const selectDailyTransactionTotalReducer = state => state.dailyTransactionTotal;

export const selectDailyTransactionTotalData = createSelector(
    [selectDailyTransactionTotalReducer],
    (dailyTransactionTotalReducer) => dailyTransactionTotalReducer.data
);

export const selectDailyTransactionTotalIsLoading = createSelector(
    [selectDailyTransactionTotalReducer],
    (dailyTransactionTotalReducer) => dailyTransactionTotalReducer.isLoading
);