import { COMPANY_PROFILE_ACTION_TYPES, MY_PROFILE_ACTION_TYPES } from "./user.types";

export const COMPANY_PROFILE_INITIAL_STATE = {
    data: null,
    isLoading: false,
    error: null,
}

export const MY_PROFILE_INITIAL_STATE = {
    data: null,
    isLoading: false,
    error: null,
}

export const companyProfileReducer = (state = COMPANY_PROFILE_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case COMPANY_PROFILE_ACTION_TYPES.FETCH_COMPANY_PROFILE_START:
            return {
                ...state, 
                isLoading: true
            };
        case COMPANY_PROFILE_ACTION_TYPES.FETCH_COMPANY_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
            }
        case COMPANY_PROFILE_ACTION_TYPES.FETCH_COMPANY_PROFILE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state;
    }
}

export const myProfileReducer = (state = MY_PROFILE_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case MY_PROFILE_ACTION_TYPES.FETCH_MY_PROFILE_START:
            return {
                ...state, 
                isLoading: true
            };
        case MY_PROFILE_ACTION_TYPES.FETCH_MY_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
            }
        case MY_PROFILE_ACTION_TYPES.FETCH_MY_PROFILE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state;
    }
}