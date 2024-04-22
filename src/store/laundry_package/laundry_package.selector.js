import { createSelector } from 'reselect';

const selectLaundryPackagesReducer = state => state.laundryPackages;

export const selectLaundryPackagesData = createSelector(
    [selectLaundryPackagesReducer],
    (laundryPackagesReducer) => laundryPackagesReducer.data
);

export const selectLaundryPackagesMeta = createSelector(
    [selectLaundryPackagesReducer],
    (laundryPackagesReducer) => laundryPackagesReducer.meta  
);

export const selectLaundryPackagesIsLoading = createSelector(
    [selectLaundryPackagesReducer],
    (laundryPackagesReducer) => laundryPackagesReducer.isLoading
);