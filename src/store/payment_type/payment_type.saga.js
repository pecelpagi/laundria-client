import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as apiService from "../../data";
import {
    fetchPaymentTypesSuccess,
    fetchPaymentTypesFailure,
} from './payment_type.action';

import { PAYMENT_TYPE_ACTION_TYPES } from './payment_type.types';

export function* fetchPaymentTypesAsync({ payload }) {
    try {
        const response = yield call(apiService.getPaymentTypes, payload);
        yield put(fetchPaymentTypesSuccess(response));
    } catch (error) {
        yield put(fetchPaymentTypesFailure(error));
    }
}

export function* onFetchPaymentTypes() {
    yield takeLatest(
        PAYMENT_TYPE_ACTION_TYPES.FETCH_PAYMENT_TYPES_START,
        fetchPaymentTypesAsync,
    )
}

export function* paymentTypesSaga() {
    yield all([call(onFetchPaymentTypes)]);
}