import { SALES_ACTION_TYPES, UNPROCESSED_SALES_ACTION_TYPES } from './sales.types';
import { createAction } from '../reducer.utils';

export const fetchSalesStart = (payload) => createAction(SALES_ACTION_TYPES.FETCH_SALES_START, payload);

export const fetchSalesSuccess = ({ data, meta }) => createAction(SALES_ACTION_TYPES.FETCH_SALES_SUCCESS, { data, meta });

export const fetchSalesFailure = (error) => createAction(SALES_ACTION_TYPES.FETCH_SALES_FAILED, error);

export const fetchUnprocessedSalesStart = (payload) => createAction(UNPROCESSED_SALES_ACTION_TYPES.FETCH_UNPROCESSED_SALES_START, payload);

export const fetchUnprocessedSalesSuccess = ({ data, meta }) => createAction(UNPROCESSED_SALES_ACTION_TYPES.FETCH_UNPROCESSED_SALES_SUCCESS, { data, meta });

export const fetchUnprocessedSalesFailure = (error) => createAction(UNPROCESSED_SALES_ACTION_TYPES.FETCH_UNPROCESSED_SALES_FAILED, error);
