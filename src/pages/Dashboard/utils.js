import * as apiService from "../../data";
import { currency, reformatDateTimeAsText } from "../../utils";
import { ORDER_STATUS } from "../Transaction/utils";

export const handleFetchOrderList = async (state) => {
  let data = [];
  let totalPage = 0;

  try {
    const response = await apiService.getOrders({ order_status: ORDER_STATUS.NEW, ...state });

    ({ data } = response);
    totalPage = response.meta.total_pages;
  } catch (e) {
    console.log(e);
  }

  return { data, totalPage };
};

export const createTableColumns = () => [
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
    id: "customer_name",
    title: "Customer",
  },
  {
    id: "total",
    title: "Total",
    customComponent: val => <span>{currency(val)}</span>,
  },
];
