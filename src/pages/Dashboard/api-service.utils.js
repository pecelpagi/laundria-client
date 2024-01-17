import moment from 'moment';
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

export const handleFetchDailyTransactionTotal = async ({ setState }) => {
    let data = null;

    try {
        const start_date = moment().subtract(7, "days").format("YYYY-MM-DD");
        const end_date = moment().format("YYYY-MM-DD");

        const payload = {
            start_date,
            end_date
        };
        const response = await apiService.getDailyTransactionsTotal(payload);

        ({ data } = response);

        setState({ dailyTransactionTotal: data });
    } catch (e) {
        console.error(e);
    }

    return data;
}