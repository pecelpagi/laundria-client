import { COMPANY_PROFILE_ACTION_TYPES } from './user.types';
import { createAction } from '../reducer.utils';

export const fetchCompanyProfileStart = (payload) => createAction(COMPANY_PROFILE_ACTION_TYPES.FETCH_COMPANY_PROFILE_START, payload);

export const fetchCompanyProfileSuccess = ({ data, meta }) => createAction(COMPANY_PROFILE_ACTION_TYPES.FETCH_COMPANY_PROFILE_SUCCESS, { data, meta });

export const fetchCompanyProfileFailure = (error) => createAction(COMPANY_PROFILE_ACTION_TYPES.FETCH_COMPANY_PROFILE_FAILED, error);
