import React from "react";
import * as apiService from "../../../data";
import Form from "./Form";
import { TOAST_TYPE } from "../../../mainlayout/enums";
import { catchError } from "../../../utils";
import { ORDER_STATUS } from "../utils";
import { ComponentContext } from "./Context";
import Spinner from "../../../components/Spinner";
import Button from '../../../components/StyledButton';
import ButtonPrintInvoice from './ButtonPrintInvoice';

class UpdateTransaction extends React.Component {
    state = {
        formData: null,
        readOnlyData: null,
        isFetching: false,
        isSaving: false,
    }

    componentDidMount = () => {
        const { onAssignButtons, onAssignBreadcrumbs } = this.props;

        onAssignButtons([]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            {
                label: "Transaksi", link: "/transaction",
            },
            "Detail Transaksi",
        ]);

        this.handleFetchData();
    }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    handleSetSaving = (isSaving) => { this.setState({ isSaving }); }

    handleSetFetching = (isFetching) => { this.setState({ isFetching }); }

    handleFetchData = async () => {
        this.handleSetFetching(true);

        try {
            const { match: { params } } = this.props;
            const res = await apiService.getOrder(params.id);

            if (!res.data) throw new Error("Data is Empty");

            const formData = {
                ...res.data,
                readOnlyOrderStatus: res.data.order_status,
                paymentType: { id: res.data.payment_type_id, name: res.data.payment_type_name },
                paymentStatus: res.data.payment_status,
            };

            this.setState({ formData, readOnlyData: res.data });
        } catch (e) {
            this.doShowingNotification(TOAST_TYPE.ERROR, catchError(e));
        } finally {
            this.handleSetFetching(false);
        }
    }

    handleSaveData = async (data) => {
        this.handleSetSaving(true);


        try {
            const { formData } = this.state;
            const payload = {
                id: formData.id,
                payment_status: data.paymentStatus,
                order_status: data.orderStatus,
            };

            await apiService.updateOrder(payload);

            this.doShowingNotification(TOAST_TYPE.SUCCESS, "Data telah tersimpan");
            this.handleBackToList();
        } catch (e) {
            this.doShowingNotification(TOAST_TYPE.ERROR, catchError(e));
            this.handleSetSaving(false);
        }
    }

    handleBackToList = () => {
        const { history } = this.props;

        history.push("/transaction");
    }

    createContextValue = () => {
        const { formData } = this.state;

        if (!formData) return {};

        const readOnly = !(formData.readOnlyOrderStatus !== ORDER_STATUS.PICKED_UP && formData.readOnlyOrderStatus !== ORDER_STATUS.CANCELED);

        return {
            formData,
            readOnly,
        }
    }

    render() {
        const { formData, isFetching, readOnlyData, isSaving } = this.state;

        return (
            <ComponentContext.Provider value={this.createContextValue()}>
                <div className="relative">
                    <div className="bg-white rounded divide-y divide-solid">
                        <div className="flex p-3 items-center">
                            <div className="text-base font-semibold w-3/5">Detail Transaksi</div>
                            <div className="w-2/5 text-xs flex justify-end"><ButtonPrintInvoice data={readOnlyData} /></div>
                        </div>
                        <div className="p-3">
                            {isFetching && <div className="relative h-32"><Spinner /></div>}
                            {!isFetching && formData && (<Form onSave={this.handleSaveData} onCancel={this.handleBackToList} />)}
                            {!isFetching && !formData && (
                                <div className="text-sm flex flex-row items-center h-10">
                                    <div className="w-1/2">Data tidak ditemukan</div>
                                    <div className="w-1/2 flex justify-end">
                                        <Button type="button" onClick={this.handleBackToList}>Kembali ke Daftar Transaksi</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {isSaving && <Spinner />}
                </div>
            </ComponentContext.Provider>
        );
    }
}

export default UpdateTransaction;