import * as apiService from "../../data";

export const handleFetchLaundryTransactions = async ({ search, setState }) => {
    try {
        const payload = {
            page: 1,
            limit: 10,
            search,
        };
        const response = await apiService.getLaundryTransactions(payload);

        const { data } = response;

        setState({ laundryTransactions: data });
    } catch (e) {
        console.error(e);
    }
};

export const handleFetchCustomers = async ({ search, setState }) => {
    try {
        const payload = {
            page: 1,
            limit: 10,
            search,
        };
        const response = await apiService.getCustomers(payload);

        const { data } = response;

        setState({ customers: data });
    } catch (e) {
        console.error(e);
    }
};
