import { EMPLOYEE_ACTION_TYPES } from "./employee.types";

export const EMPLOYEE_INITIAL_STATE = {
    data: [],
    meta: {
        number_of_pages: 0,
    },
    isLoading: false,
    error: null,
}

export const employeesReducer = (state = EMPLOYEE_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case EMPLOYEE_ACTION_TYPES.FETCH_EMPLOYEES_START:
            return {
                ...state, 
                isLoading: true
            };
        case EMPLOYEE_ACTION_TYPES.FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
                meta: payload.meta,
            }
        case EMPLOYEE_ACTION_TYPES.FETCH_EMPLOYEES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state;
    }
}