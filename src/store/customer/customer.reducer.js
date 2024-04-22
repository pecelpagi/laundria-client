import { CUSTOMER_ACTION_TYPES } from "./customer.types";

export const CUSTOMER_INITIAL_STATE = {
    data: [],
    meta: {
        number_of_pages: 0,
    },
    isLoading: false,
    error: null,
}

export const customersReducer = (state = CUSTOMER_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CUSTOMER_ACTION_TYPES.FETCH_CUSTOMERS_START:
            return {
                ...state,
                isLoading: true
            };
        case CUSTOMER_ACTION_TYPES.FETCH_CUSTOMERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
                meta: payload.meta,
            }
        case CUSTOMER_ACTION_TYPES.FETCH_CUSTOMERS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state;
    }
}