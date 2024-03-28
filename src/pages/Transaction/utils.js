import moment from "moment";
import { ORDER_STATUS, PAYMENT_STATUS } from "../../enums";

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

    const codeRandom = String(Math.random()).substring(2, 6);

    return (`LDRY${codeYear}${codeMonth}${codeDate}${codeRandom}`).toUpperCase();
};

export const createFormData = () => ({
    salesNumber: generateOrderNumber(),
    customer: { id: "", text: "" },
    phone: "",
    addr: "",
    laundryPackageId: "",
    weight: '',
    pickupDate: moment().add(3, "days").toDate(),
    paymentTypeId: "",
    paymentStatus: "",
});

export const createPayload = data => ({
    customer_id: data.customer.id,
    phone: data.phone,
    addr: data.addr,
    laundry_package_id: data.laundryPackageId,
    weight: data.weight,
    pickup_date: moment(data.pickupDate).format('YYYY-MM-DD'),
    payment_type_id: data.paymentTypeId,
    payment_status: data.paymentStatus,
    sales_number: data.salesNumber,
    order_status: ORDER_STATUS.NEW,
});
