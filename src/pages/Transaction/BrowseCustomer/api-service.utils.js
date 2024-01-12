import * as apiService from "../../../data";

export const handleFetchCustomers = async ({ state, isReplace, onSetLoading, setState }) => {
    onSetLoading(true);

    try {
        let data = [];
        let totalPage = 0;

        const { page, search, customers } = state;
        const payload = {
            limit: 6,
            page: page + 1,
            search,
        }
        const response = await apiService.getCustomers(payload);

        ({ data } = response);
        totalPage = response.meta.number_of_pages;

        setState({
            totalPage: totalPage,
            customers: isReplace ? data : [...customers, ...data]
        });
    } catch (e) {
        // TODO: show toast
    }

    onSetLoading(false);
};