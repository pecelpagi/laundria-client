import React, { useContext } from "react";
import { currency, reformatDateTimeAsText } from "../../../utils";
import { ComponentContext } from "./Context";
import { Table } from "./UpdateTransaction.styles";

const OrderDetail = () => {
    const { formData: data } = useContext(ComponentContext);

    return (
        <Table className="border-collapse table-auto w-full text-sm whitespace-nowrap">
            <thead>
                <tr>
                    <th style={{ width: "200px" }}>Tgl. Order</th>
                    <th>Paket Laundry</th>
                    <th>Berat Cucian</th>
                    <th>Harga / Kg</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-solid">
                <tr>
                    <td>{reformatDateTimeAsText(data.created_at)}</td>
                    <td>{data.laundry_package_name}</td>
                    <td>{`${Number(data.weight)} kg`}</td>
                    <td>{currency(parseFloat(data.laundry_package_price))}</td>
                    <td>{currency(parseFloat(data.total))}</td>
                </tr>
                <tr>
                    <td colSpan="4" className="text-right"><b>TOTAL PESANAN&nbsp;&nbsp;&nbsp;</b></td>
                    <td>{currency(parseFloat(data.total))}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default OrderDetail;
