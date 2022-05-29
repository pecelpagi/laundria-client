import React from "react";
import * as apiService from "../../../data";
import { createFormData } from "../utils";
import Form from "./Form";
import { createPayload } from "../utils";
import { TOAST_TYPE } from "../../../mainlayout/enums";
import { catchError } from "../../../utils";
import Spinner from "../../../components/Spinner";

class CreateTransaction extends React.Component {
    state = {
        formData: createFormData(),
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
            "Buat Transaksi",
        ]);
    }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    handleSetSaving = (isSaving) => { this.setState({ isSaving }); }

    handleSaveData = async (data) => {
        this.handleSetSaving(true);

        try {
            const payload = createPayload(data);

            await apiService.createOrder(payload);

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

    render() {
        const { formData, isSaving } = this.state;

        return (
            <div className="relative">
                <div className="bg-white rounded divide-y divide-solid">
                    <div className="flex p-3 items-center">
                        <div className="text-base font-semibold w-full">Buat Transaksi</div>
                    </div>
                    <div className="p-3">
                        <Form
                            {...{ formData }}
                            onSave={this.handleSaveData}
                            onCancel={this.handleBackToList}
                        />
                    </div>
                </div>
                {isSaving ? <Spinner /> : null}
            </div>
        );
    }
}

export default CreateTransaction;