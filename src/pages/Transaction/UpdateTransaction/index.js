import React from "react";
import * as apiService from "../../../data";
import Form from "./Form";
import { TOAST_TYPE } from "../../../mainlayout/enums";
import { catchError } from "../../../utils";
import { ORDER_STATUS } from "../utils";
import { ComponentContext } from "./Context";

class UpdateTransaction extends React.Component {
    state = {
        formData: null,
        readOnlyData: null,
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

    handleFetchData = async () => {
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
            console.log(e);
        }
    }

    handleSaveData = async (data) => {
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
        }
    }

    handleBackToList = () => {
        const { history } = this.props;

        history.push("/transaction");
    }

    createContextValue = () => {
        const { formData } = this.state;

        const readOnly = !(formData.readOnlyOrderStatus !== ORDER_STATUS.PICKED_UP && formData.readOnlyOrderStatus !== ORDER_STATUS.CANCELED);

        return {
            formData,
            readOnly,
        }
    }

    render() {
        const { formData } = this.state;

        if (!formData) return null;

        return (
            <ComponentContext.Provider value={this.createContextValue()}>
                <div className="bg-white rounded divide-y divide-solid">
                    <div className="flex p-3 items-center">
                        <div className="text-base font-semibold w-full">Detail Transaksi</div>
                    </div>
                    <div className="p-3">
                        <Form onSave={this.handleSaveData} onCancel={this.handleBackToList} />
                    </div>
                </div>
            </ComponentContext.Provider>
        );
    }
}

export default UpdateTransaction;