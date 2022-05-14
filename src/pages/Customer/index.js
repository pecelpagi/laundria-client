import React from 'react';
import {
    PlusIcon,
} from '@radix-ui/react-icons';
import CustomerList from './CustomerList';
import CustomerDialog from './CustomerDialog';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import { createFormData, handleSaveData, CustomerContext, handleDeleteData } from './utils';
import { TOAST_TYPE } from '../../mainlayout/enums';

class Customer extends React.Component {
    state = {
        formData: createFormData(),
        isDialogLoading: false,
    }
    
    componentDidMount = () => {
        const { onAssignButtons, onAssignBreadcrumbs } = this.props;

        onAssignButtons([{
            id: "1", title: "Tambah Data", icon: () => <PlusIcon />, clickEvent: () => { this.handleOpenFormDialog(); },
        }]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            "Customer",
        ]);
    }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    handleOpenFormDialog = (data = null) => {
        const formData = createFormData(data);
    
        this.setState({ formData }, () => {
            this.customerDialog.handleShowDialog();
        });
    }

    handleSetDialogLoading = (loading) => { this.setState({ isDialogLoading: loading }); }

    doSavingData = async (data) => {
        const onErrorCallback = (err) => { this.doShowingNotification(TOAST_TYPE.ERROR, err); };
        const onSuccessCallback = () => {
            this.customerList.refetchData();
            this.customerDialog.handleHideDialog();

            this.doShowingNotification(TOAST_TYPE.SUCCESS, 'Data telah tersimpan');
        };

        this.handleSetDialogLoading(true);
        await handleSaveData(data, onSuccessCallback, onErrorCallback);
        this.handleSetDialogLoading(false);
    };

    doDeletingData = async () => {
        const { formData } = this.state;

        const onSuccessCallback = () => {
            this.customerList.refetchData();
            this.customerDialog.handleHideDialog();
            this.deleteConfirmationDialog.handleHideDialog();

            this.doShowingNotification(TOAST_TYPE.SUCCESS, 'Data telah dihapus');
        };

        const onErrorCallback = (err) => {
            this.doShowingNotification(TOAST_TYPE.ERROR, err);
            this.deleteConfirmationDialog.handleHideDialog();
        };

        this.handleSetDialogLoading(true);
        await handleDeleteData(formData, onSuccessCallback, onErrorCallback);
        this.handleSetDialogLoading(false);
    };

    handleFetchError = (err) => { this.doShowingNotification(TOAST_TYPE.ERROR, err); }

    createContextValue = () => {
        const { formData, isDialogLoading } = this.state;

        return {
            formData,
            onShowFormDialog: () => { this.customerDialog.handleShowDialog(); },
            onHideFormDialog: () => { this.customerDialog.handleHideDialog(); },
            onShowConfirmationDialog: () => { this.deleteConfirmationDialog.handleShowDialog(); },
            onHideConfirmationDialog: () => { this.deleteConfirmationDialog.handleHideDialog(); },
            onSave: this.doSavingData,
            onDelete: this.doDeletingData,
            isDialogLoading
        }
    }

    render() {
        return (
            <CustomerContext.Provider value={this.createContextValue()}>
                <CustomerList
                    ref={(c) => { this.customerList = c; }}
                    onRowClick={this.handleOpenFormDialog}
                    onError={this.handleFetchError}
                />
                <CustomerDialog ref={(c) => { this.customerDialog = c; }} />
                <DeleteConfirmationDialog ref={(c) => { this.deleteConfirmationDialog = c; }} />
            </CustomerContext.Provider>
        )
    }
}

export default Customer;
