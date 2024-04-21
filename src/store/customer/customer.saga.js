import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as apiService from "../../data";
import {
    fetchCustomersSuccess,
    fetchCustomersFailure,
} from './customer.action';

import { CUSTOMER_ACTION_TYPES } from './customer.types';

export function* fetchCustomersAsync({ payload }) {
    try {
        const response = yield call(apiService.getCustomers, payload);
        yield put(fetchCustomersSuccess(response));
    } catch (error) {
        yield put(fetchCustomersFailure(error));
    }
}

export function* onFetchCustomers() {
    yield takeLatest(
        CUSTOMER_ACTION_TYPES.FETCH_CUSTOMERS_START,
        fetchCustomersAsync,
    )
}

export function* customersSaga() {
    yield all([call(onFetchCustomers)]);
}