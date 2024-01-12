import { TOAST_TYPE } from "../../../mainlayout/enums";
import * as apiService from "../../../data";
import { catchError } from "../../../utils";

export const handleFetchData = async ({ onShowNotification, params, setState }) => {
    try {
        const res = await apiService.getLaundryTransaction(params.id);

        if (!res.data) throw new Error("Data is Empty");

        const formData = {
            ...res.data,
            orderStatus: res.data.order_status,
            paymentType: { id: res.data.payment_type_id, name: res.data.payment_type_name },
            paymentStatus: res.data.payment_status,
        };

        setState({
            formData,
            readOnlyData: formData,
        })
    } catch (e) {
        onShowNotification(TOAST_TYPE.ERROR, catchError(e));
    }
}

export const handleSaveData = async ({ onShowNotification, formData }, onSuccessCalbackFn = () => {}) => {
    try {
        const payload = {
            id: formData.id,
            payment_status: formData.paymentStatus,
            order_status: formData.orderStatus,
        };
    
        await apiService.updateLaundryTransaction(payload);
        onShowNotification(TOAST_TYPE.SUCCESS, "Data telah tersimpan");
        onSuccessCalbackFn();
    } catch (e) {
        onShowNotification(TOAST_TYPE.ERROR, catchError(e));
    }
}