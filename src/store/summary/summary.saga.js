import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as apiService from "../../data";
import {
    fetchSummarySuccess,
    fetchSummaryFailure,
    fetchDailyTransactionTotalSuccess,
    fetchDailyTransactionTotalFailure,
} from './summary.action';

import { SUMMARY_ACTION_TYPES, DAILY_TRANSACTION_TOTAL_ACTION_TYPES } from './summary.types';
import moment from 'moment';

export function* fetchSummaryAsync() {
    try {
        const response = yield call(apiService.getDashboardSummary);
        yield put(fetchSummarySuccess(response));
    } catch (error) {
        yield put(fetchSummaryFailure(error));
    }
}

export function* onFetchSummary() {
    yield takeLatest(
        SUMMARY_ACTION_TYPES.FETCH_SUMMARY_START,
        fetchSummaryAsync,
    )
}

export function* fetchDailyTransactionTotalAsync() {
    try {
        const start_date = moment().subtract(7, "days").format("YYYY-MM-DD");
        const end_date = moment().format("YYYY-MM-DD");

        const payload = {
            start_date,
            end_date
        };
        const response = yield call(apiService.getDailyTransactionsTotal, payload);
        yield put(fetchDailyTransactionTotalSuccess(response));
    } catch (error) {
        yield put(fetchDailyTransactionTotalFailure(error));
    }
}

export function* onFetchDailyTransactionTotal() {
    yield takeLatest(
        DAILY_TRANSACTION_TOTAL_ACTION_TYPES.FETCH_DAILY_TRANSACTION_TOTAL_START,
        fetchDailyTransactionTotalAsync,
    )
}

export function* summarySaga() {
    yield all([call(onFetchSummary), call(onFetchDailyTransactionTotal)]);
}