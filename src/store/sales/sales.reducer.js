import { SALES_ACTION_TYPES } from "./sales.types";

export const SALES_INITIAL_STATE = {
    data: [],
    meta: {
        number_of_pages: 0,
    },
    isLoading: false,
    error: null,
}

export const salesReducer = (state = SALES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case SALES_ACTION_TYPES.FETCH_SALES_START:
            return {
                ...state,
                isLoading: true
            };
        case SALES_ACTION_TYPES.FETCH_SALES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
                meta: payload.meta,
            }
        case SALES_ACTION_TYPES.FETCH_SALES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state;
    }
}