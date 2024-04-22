import { COMPANY_PROFILE_ACTION_TYPES, MY_PROFILE_ACTION_TYPES } from './user.types';
import { createAction } from '../reducer.utils';

export const fetchCompanyProfileStart = (payload) => createAction(COMPANY_PROFILE_ACTION_TYPES.FETCH_COMPANY_PROFILE_START, payload);

export const fetchCompanyProfileSuccess = ({ data, meta }) => createAction(COMPANY_PROFILE_ACTION_TYPES.FETCH_COMPANY_PROFILE_SUCCESS, { data, meta });

export const fetchCompanyProfileFailure = (error) => createAction(COMPANY_PROFILE_ACTION_TYPES.FETCH_COMPANY_PROFILE_FAILED, error);

export const fetchMyProfileStart = (payload) => createAction(MY_PROFILE_ACTION_TYPES.FETCH_MY_PROFILE_START, payload);

export const fetchMyProfileSuccess = ({ data, meta }) => createAction(MY_PROFILE_ACTION_TYPES.FETCH_MY_PROFILE_SUCCESS, { data, meta });

export const fetchMyProfileFailure = (error) => createAction(MY_PROFILE_ACTION_TYPES.FETCH_MY_PROFILE_FAILED, error);
