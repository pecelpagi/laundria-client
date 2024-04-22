import { createSelector } from 'reselect';

const selectEmployeesReducer = state => state.employees;

export const selectEmployeesData = createSelector(
    [selectEmployeesReducer],
    (employeesReducer) => employeesReducer.data
);

export const selectEmployeesMeta = createSelector(
    [selectEmployeesReducer],
    (employeesReducer) => employeesReducer.meta  
);

export const selectEmployeesIsLoading = createSelector(
    [selectEmployeesReducer],
    (employeesReducer) => employeesReducer.isLoading
);