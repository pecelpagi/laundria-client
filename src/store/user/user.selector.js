import { createSelector } from 'reselect';

const selectCompanyProfileReducer = state => state.companyProfile;

export const selectCompanyProfileData = createSelector(
    [selectCompanyProfileReducer],
    (companyProfileReducer) => companyProfileReducer.data
);

export const selectCompanyProfileIsLoading = createSelector(
    [selectCompanyProfileReducer],
    (companyProfileReducer) => companyProfileReducer.isLoading
);

const selectMyProfileReducer = state => state.myProfile;

export const selectMyProfileData = createSelector(
    [selectMyProfileReducer],
    (myProfileReducer) => myProfileReducer.data
);

export const selectMyProfileIsLoading = createSelector(
    [selectMyProfileReducer],
    (myProfileReducer) => myProfileReducer.isLoading
);