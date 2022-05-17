import React from "react";
import moment from "moment";
import * as apiService from "../../data";
import { currency, reformatDateTimeAsText } from "../../utils";

export const PAYMENT_STATUS = {
    NOT_PAID: "1",
    PAID: "2",
};

export const ORDER_STATUS = {
    NEW: "1",
    PROCESSED: "2",
    CANCELED: "3",
    FINISHED: "4",
    PICKED_UP: "5",
};

export const createStaticDataPaymentStatus = () => {
    const retval = [
        {
            value: PAYMENT_STATUS.NOT_PAID,
            label: "Belum Lunas",
        },
        {
            value: PAYMENT_STATUS.PAID,
            label: "Lunas",
        },
    ];

    return retval;
};

export const createPaymentStatusText = (paymentStatus) => {
    switch (paymentStatus) {
        case PAYMENT_STATUS.NOT_PAID:
            return "Belum Lunas";
        case PAYMENT_STATUS.PAID:
            return "Lunas";
        default:
            return "";
    }
};

export const createOrderStatusText = (orderStatus) => {
    switch (orderStatus) {
        case ORDER_STATUS.NEW:
            return "Baru";
        case ORDER_STATUS.PROCESSED:
            return "Proses";
        case ORDER_STATUS.CANCELED:
            return "Batal";
        case ORDER_STATUS.FINISHED:
            return "Selesai";
        case ORDER_STATUS.PICKED_UP:
            return "Diambil";
        default:
            return "";
    }
};

export const createDataOrderStatus = (currentOrderStatus) => {
    if (currentOrderStatus === ORDER_STATUS.PROCESSED) {
        return [
            {
                value: ORDER_STATUS.PROCESSED,
                label: createOrderStatusText(ORDER_STATUS.PROCESSED),
            },
            {
                value: ORDER_STATUS.FINISHED,
                label: createOrderStatusText(ORDER_STATUS.FINISHED),
            },
        ];
    }

    if (currentOrderStatus === ORDER_STATUS.FINISHED) {
        return [
            {
                value: ORDER_STATUS.FINISHED,
                label: createOrderStatusText(ORDER_STATUS.FINISHED),
            },
            {
                value: ORDER_STATUS.PICKED_UP,
                label: createOrderStatusText(ORDER_STATUS.PICKED_UP),
            },
        ];
    }

    return [
        {
            value: ORDER_STATUS.NEW,
            label: createOrderStatusText(ORDER_STATUS.NEW),
        },
        {
            value: ORDER_STATUS.PROCESSED,
            label: createOrderStatusText(ORDER_STATUS.PROCESSED),
        },
        {
            value: ORDER_STATUS.CANCELED,
            label: createOrderStatusText(ORDER_STATUS.CANCELED),
        },
    ];
};

export const handleFetchOrderList = async (state) => {
    let data = [];
    let totalPage = 0;

    try {
        const response = await apiService.getOrders(state);

        ({ data } = response);
        totalPage = response.meta.total_pages;
    } catch (e) {
        console.log(e);
    }

    return { data, totalPage };
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

export const generateOrderNumber = () => {
    const stringCode = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345";
    let codeYear = "";
    let codeMonth = "";
    let codeDate = "";

    const year = moment().format("YY");
    const numYear1 = year[0] !== "0" ? stringCode[parseInt(year[0], 10) - 1] : "0";
    const numYear2 = year[1] !== "0" ? stringCode[parseInt(year[1], 10) - 1] : "0";
    codeYear = numYear1 + numYear2;

    const month = moment().format("MM");
    codeMonth = stringCode[parseInt(month, 10) - 1];

    const date = moment().format("DD");
    codeDate = stringCode[parseInt(date, 10) - 1];

    const codeRandom = Math.random().toString(36).substr(3, 4);

    return (`LDRY${codeYear}${codeMonth}${codeDate}${codeRandom}`).toUpperCase();
};

export const createFormData = () => ({
    salesNumber: generateOrderNumber(),
    customerId: "",
    phone: "",
    addr: "",
    laundryPackageId: "",
    weight: 0,
    pickupDate: moment().add(3, "days").format("YYYY-MM-DD"),
    paymentTypeId: "",
    paymentStatus: "",
});

export const createPayload = data => ({
    customer_id: data.customerId,
    phone: data.phone,
    addr: data.addr,
    laundry_package_id: data.laundryPackageId,
    weight: data.weight,
    pickup_date: data.pickupDate,
    payment_type_id: data.paymentTypeId,
    payment_status: data.paymentStatus,
    sales_number: data.salesNumber,
    order_status: ORDER_STATUS.NEW,
});
