import { LAUNDRY_PACKAGE_ACTION_TYPES } from "./laundry_package.types";

export const LAUNDRY_PACKAGE_INITIAL_STATE = {
    data: [],
    meta: {
        number_of_pages: 0,
    },
    isLoading: false,
    error: null,
}

export const laundryPackagesReducer = (state = LAUNDRY_PACKAGE_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case LAUNDRY_PACKAGE_ACTION_TYPES.FETCH_LAUNDRY_PACKAGES_START:
            return {
                ...state, 
                isLoading: true
            };
        case LAUNDRY_PACKAGE_ACTION_TYPES.FETCH_LAUNDRY_PACKAGES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
                meta: payload.meta,
            }
        case LAUNDRY_PACKAGE_ACTION_TYPES.FETCH_LAUNDRY_PACKAGES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        default:
            return state;
    }
}