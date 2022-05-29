import React, { useContext } from "react";
import { reformatDateAsText } from "../../../utils";
import { ComponentContext } from "./Context";
import { Table } from "./UpdateTransaction.styles";

const InformationData = () => {
    const { formData: data } = useContext(ComponentContext);

    return (
        <div>
            <h5 className="text-sm mb-2"><b>INFORMASI DATA</b></h5>
            <Table className="border-collapse table-auto w-full text-sm">
                <tbody>
                    <tr>
                        <td style={{ width: "150px" }}>No. Order</td>
                        <td>{data.sales_number}</td>
                    </tr>
                    <tr>
                        <td>Nama Lengkap</td>
                        <td>{data.customer_name}</td>
                    </tr>
                    <tr>
                        <td>Alamat Lengkap</td>
                        <td>{data.addr}</td>
                    </tr>
                    <tr>
                        <td>Telepon</td>
                        <td>{data.phone}</td>
                    </tr>
                    <tr>
                        <td>Tipe Pembayaran</td>
                        <td>{data.payment_type_name}</td>
                    </tr>
                    <tr>
                        <td>Tanggal Ambil</td>
                        <td>{reformatDateAsText(data.pickup_date)}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default InformationData;
