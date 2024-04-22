import { SUMMARY_ACTION_TYPES, DAILY_TRANSACTION_TOTAL_ACTION_TYPES } from "./summary.types";

export const SUMMARY_INITIAL_STATE = {
    data: null,
    isLoading: false,
    error: null,
}

export const DAILY_TRANSACTION_TOTAL_INITIAL_STATE = {
    data: null,
    isLoading: false,
    error: null,
}

export const summaryReducer = (state = SUMMARY_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case SUMMARY_ACTION_TYPES.FETCH_SUMMARY_START:
            return {
                ...state,
                isLoading: true
            };
        case SUMMARY_ACTION_TYPES.FETCH_SUMMARY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
            }
        case SUMMARY_ACTION_TYPES.FETCH_SUMMARY_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state;
    }
}

export const dailyTransactionTotalReducer = (state = DAILY_TRANSACTION_TOTAL_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case DAILY_TRANSACTION_TOTAL_ACTION_TYPES.FETCH_DAILY_TRANSACTION_TOTAL_START:
            return {
                ...state,
                isLoading: true
            };
        case DAILY_TRANSACTION_TOTAL_ACTION_TYPES.FETCH_DAILY_TRANSACTION_TOTAL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
            }
        case DAILY_TRANSACTION_TOTAL_ACTION_TYPES.FETCH_DAILY_TRANSACTION_TOTAL_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state;
    }
}