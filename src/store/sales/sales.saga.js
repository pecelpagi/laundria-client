import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as apiService from "../../data";
import {
    fetchSalesSuccess,
    fetchSalesFailure,
} from './sales.action';

import { SALES_ACTION_TYPES } from './sales.types';

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

export function* salesSaga() {
    yield all([call(onFetchSales)]);
}