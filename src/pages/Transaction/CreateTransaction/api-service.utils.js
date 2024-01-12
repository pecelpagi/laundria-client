import { TOAST_TYPE } from "../../../mainlayout/enums";
import * as apiService from "../../../data";
import { catchError } from "../../../utils";
import { createPayload } from "../utils";

export const handleSaveData = async ({ onShowNotification, formData }, onSuccessCalbackFn = () => {}) => {
    try {
        const payload = createPayload(formData);
        await apiService.createLaundryTransaction(payload);
        onShowNotification(TOAST_TYPE.SUCCESS, "Data telah tersimpan");
        onSuccessCalbackFn();
    } catch (e) {
        onShowNotification(TOAST_TYPE.ERROR, catchError(e));
    }
}