import { EMPLOYEE_ACTION_TYPES } from './employee.types';
import { createAction } from '../reducer.utils';

export const fetchEmployeesStart = (payload) => createAction(EMPLOYEE_ACTION_TYPES.FETCH_EMPLOYEES_START, payload);

export const fetchEmployeesSuccess = ({ data, meta }) => createAction(EMPLOYEE_ACTION_TYPES.FETCH_EMPLOYEES_SUCCESS, { data, meta });

export const fetchEmployeesFailure = (error) => createAction(EMPLOYEE_ACTION_TYPES.FETCH_EMPLOYEES_FAILED, error);
