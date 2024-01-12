import * as apiService from "../../../data";

export const handleFetchOrderList = async (payload) => {
    let data = [];
    let totalPage = 0;
    let err = null;

    try {
        const response = await apiService.getLaundryTransactions(payload);

        ({ data } = response);
        totalPage = response.meta.number_of_pages;
    } catch (e) {
        err = e;
    }

    return { data, totalPage, err };
};