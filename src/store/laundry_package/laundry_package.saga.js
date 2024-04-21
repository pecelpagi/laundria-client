import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as apiService from "../../data";
import {
    fetchLaundryPackagesSuccess,
    fetchLaundryPackagesFailure,
} from './laundry_package.action';

import { LAUNDRY_PACKAGE_ACTION_TYPES } from './laundry_package.types';

export function* fetchLaundryPackagesAsync({ payload }) {
    try {
        const response = yield call(apiService.getLaundryPackages, payload);
        yield put(fetchLaundryPackagesSuccess(response));
    } catch (error) {
        yield put(fetchLaundryPackagesFailure(error));
    }
}

export function* onFetchLaundryPackages() {
    yield takeLatest(
        LAUNDRY_PACKAGE_ACTION_TYPES.FETCH_LAUNDRY_PACKAGES_START,
        fetchLaundryPackagesAsync,
    )
}

export function* laundryPackagesSaga() {
    yield all([call(onFetchLaundryPackages)]);
}