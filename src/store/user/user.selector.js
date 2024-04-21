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