import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as apiService from "../../data";
import {
    fetchCompanyProfileSuccess,
    fetchCompanyProfileFailure,
} from './user.action';

import { COMPANY_PROFILE_ACTION_TYPES } from './user.types';

export function* fetchCompanyProfileAsync() {
    try {
        const response = yield call(apiService.getCompanyProfile);
        yield put(fetchCompanyProfileSuccess(response));
    } catch (error) {
        yield put(fetchCompanyProfileFailure(error));
    }
}

export function* onFetchCompanyProfile() {
    yield takeLatest(
        COMPANY_PROFILE_ACTION_TYPES.FETCH_COMPANY_PROFILE_START,
        fetchCompanyProfileAsync,
    )
}

export function* companyProfileSaga() {
    yield all([call(onFetchCompanyProfile)]);
}