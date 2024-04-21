import { LAUNDRY_PACKAGE_ACTION_TYPES } from './laundry_package.types';
import { createAction } from '../reducer.utils';

export const fetchLaundryPackagesStart = (payload) => createAction(LAUNDRY_PACKAGE_ACTION_TYPES.FETCH_LAUNDRY_PACKAGES_START, payload);

export const fetchLaundryPackagesSuccess = ({ data, meta }) => createAction(LAUNDRY_PACKAGE_ACTION_TYPES.FETCH_LAUNDRY_PACKAGES_SUCCESS, { data, meta });

export const fetchLaundryPackagesFailure = (error) => createAction(LAUNDRY_PACKAGE_ACTION_TYPES.FETCH_LAUNDRY_PACKAGES_FAILED, error);
