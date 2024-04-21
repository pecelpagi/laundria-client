import { createSelector } from 'reselect';

const selectPaymentTypesReducer = state => state.paymentTypes;

export const selectPaymentTypesData = createSelector(
    [selectPaymentTypesReducer],
    (paymentTypesReducer) => paymentTypesReducer.data
);

export const selectPaymentTypesMeta = createSelector(
    [selectPaymentTypesReducer],
    (paymentTypesReducer) => paymentTypesReducer.meta  
);

export const selectPaymentTypesIsLoading = createSelector(
    [selectPaymentTypesReducer],
    (paymentTypesReducer) => paymentTypesReducer.isLoading
);