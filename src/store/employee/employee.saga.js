import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as apiService from "../../data";
import {
    fetchEmployeesSuccess,
    fetchEmployeesFailure,
} from './employee.action';

import { EMPLOYEE_ACTION_TYPES } from './employee.types';

export function* fetchEmployeesAsync({ payload }) {
    try {
        const response = yield call(apiService.getEmployees, payload);
        yield put(fetchEmployeesSuccess(response));
    } catch (error) {
        yield put(fetchEmployeesFailure(error));
    }
}

export function* onFetchEmployees() {
    yield takeLatest(
        EMPLOYEE_ACTION_TYPES.FETCH_EMPLOYEES_START,
        fetchEmployeesAsync,
    )
}

export function* employeesSaga() {
    yield all([call(onFetchEmployees)]);
}