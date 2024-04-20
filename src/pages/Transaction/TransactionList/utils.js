import { useRef } from 'react';
import { PAYMENT_STATUS } from "../../../enums";
import { currency, reformatDateTimeAsText } from "../../../utils";
import { createOrderStatusText, createStaticDataPaymentStatus } from "../utils";

export const useRefCollections = () => {
    const printReport = useRef(null);

    return {
        printReport
    };
};

export const createTableColumns = () => {
    const paymentStatusList = createStaticDataPaymentStatus();

    return [
        {
            id: "created_at",
            title: "Tgl. Transaksi",
            width: "180px",
            customComponent: val => <span>{reformatDateTimeAsText(val)}</span>,
        },
        {
            id: "sales_number",
            title: "No. Order",
        },
        {
            id: "payment_status",
            title: "Pembayaran",
            width: "130px",
            customComponent: (val) => {
                const found = paymentStatusList.find(x => (String(x.value) === String(val)));
                let className = "text-green-700";

                if (found.value === PAYMENT_STATUS.NOT_PAID) className = "text-red-700";

                return <span {...{ className }}>{found.label}</span>;
            },
        },
        {
            id: "customer_name",
            title: "Customer",
        },
        {
            id: "laundry_package_name",
            title: "Paket",
        },
        {
            id: "order_status",
            title: "Status Order",
            customComponent: val => <span>{createOrderStatusText(val)}</span>,
        },
        {
            id: "total",
            title: "Total",
            customComponent: val => <span>{currency(parseFloat(val))}</span>,
        },
    ];
};