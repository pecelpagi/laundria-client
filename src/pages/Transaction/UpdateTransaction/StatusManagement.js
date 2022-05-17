import { useContext } from "react";
import {
    createDataOrderStatus, createOrderStatusText,
    createPaymentStatusText, createStaticDataPaymentStatus
} from "../utils";
import Select from '../../../components/Select';
import { ComponentContext } from "./Context";
import { Table } from "./UpdateTransaction.styles";

export default ({ control }) => {
    const { formData: data, readOnly } = useContext(ComponentContext);

    return (
        <div>
            <h5 className="text-sm mb-2"><b>{`${readOnly ? "INFORMASI" : "MANAJEMEN"} STATUS`}</b></h5>
            <Table className="border-collapse table-fixed w-full text-sm">
                <tbody className="divide-y divide-solid">
                    <tr>
                        <td>Status Pembayaran</td>
                        <td>
                            {readOnly ? createPaymentStatusText(data.paymentStatus) : (
                                <Select
                                    name="paymentStatus"
                                    options={createStaticDataPaymentStatus()}
                                    value={data.paymentStatus}
                                    {...{ control }}
                                />
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Status Order</td>
                        <td>
                            {readOnly ? createOrderStatusText(data.readOnlyOrderStatus) : (
                                <Select
                                    name="orderStatus"
                                    options={createDataOrderStatus(data.readOnlyOrderStatus)}
                                    value={data.order_status}
                                    {...{ control }}
                                />
                            )}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}