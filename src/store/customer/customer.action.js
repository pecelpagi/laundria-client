import { CUSTOMER_ACTION_TYPES } from './customer.types';
import { createAction } from '../reducer.utils';

export const fetchCustomersStart = (payload) => createAction(CUSTOMER_ACTION_TYPES.FETCH_CUSTOMERS_START, payload);

export const fetchCustomersSuccess = ({ data, meta }) => createAction(CUSTOMER_ACTION_TYPES.FETCH_CUSTOMERS_SUCCESS, { data, meta });

export const fetchCustomersFailure = (error) => createAction(CUSTOMER_ACTION_TYPES.FETCH_CUSTOMERS_FAILED, error);
