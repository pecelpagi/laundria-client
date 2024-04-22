import { SUMMARY_ACTION_TYPES, DAILY_TRANSACTION_TOTAL_ACTION_TYPES } from "./summary.types";
import { createAction } from '../reducer.utils';

export const fetchSummaryStart = () => createAction(SUMMARY_ACTION_TYPES.FETCH_SUMMARY_START);

export const fetchSummarySuccess = ({ data }) => createAction(SUMMARY_ACTION_TYPES.FETCH_SUMMARY_SUCCESS, { data });

export const fetchSummaryFailure = (error) => createAction(SUMMARY_ACTION_TYPES.FETCH_SUMMARY_FAILED, error);

export const fetchDailyTransactionTotalStart = () => createAction(DAILY_TRANSACTION_TOTAL_ACTION_TYPES.FETCH_DAILY_TRANSACTION_TOTAL_START);

export const fetchDailyTransactionTotalSuccess = ({ data }) => createAction(DAILY_TRANSACTION_TOTAL_ACTION_TYPES.FETCH_DAILY_TRANSACTION_TOTAL_SUCCESS, { data });

export const fetchDailyTransactionTotalFailure = (error) => createAction(DAILY_TRANSACTION_TOTAL_ACTION_TYPES.FETCH_DAILY_TRANSACTION_TOTAL_FAILED, error);
