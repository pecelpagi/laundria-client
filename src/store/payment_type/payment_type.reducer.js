import { PAYMENT_TYPE_ACTION_TYPES } from "./payment_type.types";

export const PAYMENT_TYPE_INITIAL_STATE = {
    data: [],
    meta: {
        number_of_pages: 0,
    },
    isLoading: false,
    error: null,
}

export const paymentTypesReducer = (state = PAYMENT_TYPE_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case PAYMENT_TYPE_ACTION_TYPES.FETCH_PAYMENT_TYPES_START:
            return {
                ...state, 
                isLoading: true
            };
        case PAYMENT_TYPE_ACTION_TYPES.FETCH_PAYMENT_TYPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
                meta: payload.meta,
            }
        case PAYMENT_TYPE_ACTION_TYPES.FETCH_PAYMENT_TYPES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state;
    }
}