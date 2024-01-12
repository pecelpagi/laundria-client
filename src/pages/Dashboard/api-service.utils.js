import * as apiService from "../../data";
import { ORDER_STATUS } from "../../enums";
import { currency, reformatDateTimeAsText } from "../../utils";

export const handleFetchLaundryTransactions = async ({ setState }) => {
    let data = [];

    try {
        const response = await apiService.getLaundryTransactions({ order_status: ORDER_STATUS.NEW });

        ({ data } = response);

        data = data.map(x => ({
            ...x,
            total: currency(x.total),
            createdAt: reformatDateTimeAsText(x.created_at),
        }))

        setState({ laundryTransactions: data });
    } catch (e) {
        console.error(e);
    }
}

export const handleFetchSummary = async ({ setState }) => {
    let data = null;

    try {
        const response = await apiService.getDashboardSummary();

        ({ data } = response);

        setState({ summary: data });
    } catch (e) {
        console.error(e);
    }

    return data;
}