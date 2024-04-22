import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as apiService from "../../data";
import {
    fetchSalesSuccess,
    fetchSalesFailure,
    fetchUnprocessedSalesSuccess,
    fetchUnprocessedSalesFailure,
} from './sales.action';

import { SALES_ACTION_TYPES, UNPROCESSED_SALES_ACTION_TYPES } from './sales.types';
import { ORDER_STATUS } from '../../enums';

export function* fetchSalesAsync({ payload }) {
    try {
        const response = yield call(apiService.getLaundryTransactions, payload);
        yield put(fetchSalesSuccess(response));
    } catch (error) {
        yield put(fetchSalesFailure(error));
    }
}

export function* onFetchSales() {
    yield takeLatest(
        SALES_ACTION_TYPES.FETCH_SALES_START,
        fetchSalesAsync,
    )
}

export function* fetchUnprocessedSalesAsync() {
    try {
        const response = yield call(apiService.getLaundryTransactions, { order_status: ORDER_STATUS.NEW });
        yield put(fetchUnprocessedSalesSuccess(response));
    } catch (error) {
        yield put(fetchUnprocessedSalesFailure(error));
    }
}

export function* onFetchUnprocessedSales() {
    yield takeLatest(
        UNPROCESSED_SALES_ACTION_TYPES.FETCH_UNPROCESSED_SALES_START,
        fetchUnprocessedSalesAsync,
    )
}

export function* salesSaga() {
    yield all([call(onFetchSales), call(onFetchUnprocessedSales)]);
}