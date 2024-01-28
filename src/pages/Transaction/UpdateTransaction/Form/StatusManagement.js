import { useContext, useMemo } from "react";
import {
    createDataOrderStatus, createOrderStatusText,
    createPaymentStatusText, createStaticDataPaymentStatus
} from "../../utils";
import Select from '../../../../components/Select';
import FormContext from './FormContext';
import { Table } from "../index.styled-components";
import PageContext from "../PageContext";

const paymentStatusOptions = createStaticDataPaymentStatus();

const StatusManagement = () => {
    const { readOnlyData } = useContext(PageContext);
    const { formData: data, isReadOnly, onChange } = useContext(FormContext);

    const orderStatusOptions = useMemo(() => createDataOrderStatus(readOnlyData.order_status), [readOnlyData.order_status]);

    return (
        <div>
            <h5 className="text-sm mb-2"><b>{`${isReadOnly ? "INFORMASI" : "MANAJEMEN"} STATUS`}</b></h5>
            <Table className="border-collapse table-fixed w-full text-sm">
                <tbody className="divide-y divide-solid">
                    <tr>
                        <td>Status Pembayaran</td>
                        <td>
                            {isReadOnly ? createPaymentStatusText(data.paymentStatus) : (
                                <Select
                                    options={paymentStatusOptions}
                                    value={data.paymentStatus}
                                    onChange={(val) => { onChange('paymentStatus', val); }}
                                />
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Status Order</td>
                        <td>
                            {isReadOnly ? createOrderStatusText(readOnlyData.order_status) : (
                                <Select
                                    options={orderStatusOptions}
                                    value={data.orderStatus}
                                    onChange={(val) => { onChange('orderStatus', val); }} fullWidth
                                />
                            )}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default StatusManagement;