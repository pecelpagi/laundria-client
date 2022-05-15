import { ACTION_TYPE } from "./enums";
import * as apiService from "../data";

export const handleFetchMyProfile = async (dispatch) => {
    const res = await apiService.getMyProfile();

    dispatch({ type: ACTION_TYPE.SET_LOGGED_IN_PROFILE, payload: res.data });
};

export const handleFetchCompanyProfile = async (dispatch) => {
    const res = await apiService.getCompanyProfile();

    dispatch({ type: ACTION_TYPE.SET_COMPANY_PROFILE, payload: res.data });
};
