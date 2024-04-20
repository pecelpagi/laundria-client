import { SALES_ACTION_TYPES } from './sales.types';
import { createAction } from '../reducer.utils';

export const fetchSalesStart = (payload) => createAction(SALES_ACTION_TYPES.FETCH_SALES_START, payload);

export const fetchSalesSuccess = ({ data, meta }) => createAction(SALES_ACTION_TYPES.FETCH_SALES_SUCCESS, { data, meta });

export const fetchSalesFailure = (error) => createAction(SALES_ACTION_TYPES.FETCH_SALES_FAILED, error);
