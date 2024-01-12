import { TOAST_TYPE } from "../../../mainlayout/enums";
import * as apiService from "../../../data";
import { catchError } from "../../../utils";
import moment from "moment";

export const handleFetchReportOrders = async ({ startDate, endDate, setState, onShowNotification }, onSuccessCalbackFn = () => { }) => {
    try {
        const payload = {
            start_date: moment(startDate).format('YYYY-MM-DD'),
            end_date: moment(endDate).format('YYYY-MM-DD'),
        };

        const res = await apiService.getReportOrders(payload);

        setState({ reportData: res.data }, () => {
            onSuccessCalbackFn();
        });
    } catch (e) {
        onShowNotification(TOAST_TYPE.ERROR, catchError(e));
    }
}