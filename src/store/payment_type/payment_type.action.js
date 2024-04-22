import { PAYMENT_TYPE_ACTION_TYPES } from './payment_type.types';
import { createAction } from '../reducer.utils';

export const fetchPaymentTypesStart = (payload) => createAction(PAYMENT_TYPE_ACTION_TYPES.FETCH_PAYMENT_TYPES_START, payload);

export const fetchPaymentTypesSuccess = ({ data, meta }) => createAction(PAYMENT_TYPE_ACTION_TYPES.FETCH_PAYMENT_TYPES_SUCCESS, { data, meta });

export const fetchPaymentTypesFailure = (error) => createAction(PAYMENT_TYPE_ACTION_TYPES.FETCH_PAYMENT_TYPES_FAILED, error);
