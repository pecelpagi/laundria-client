import { useRef } from "react";
import { PAGE_TYPE } from "./enums";

export const createPageName = (pageType) => {
    switch (pageType) {
        case PAGE_TYPE.CUSTOMER:
            return 'Customer';
        case PAGE_TYPE.EMPLOYEE:
            return 'Karyawan';
        case PAGE_TYPE.LAUNDRY_PACKAGE:
            return 'Paket Laundry';
        case PAGE_TYPE.PAYMENT_TYPE:
            return 'Tipe Pembayaran';
        default:
        // do nothing
    }

    return '';
}

export const useRefCollections = () => {
    const baseFormDialog = useRef(null);
    const baseDataList = useRef(null);
    const deleteConfirmationDialog = useRef(null);

    return {
        baseFormDialog,
        baseDataList,
        deleteConfirmationDialog,
    };
};
