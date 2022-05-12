import React from 'react';
import {
    PlusIcon,
} from '@radix-ui/react-icons';
import CustomerList from './CustomerList';
import CustomerDialog from './CustomerDialog';
import { handleSaveData } from './utils';
import { TOAST_TYPE } from '../../mainlayout/enums';

class Customer extends React.Component {
    componentDidMount = () => {
        const { onAssignButtons, onAssignBreadcrumbs } = this.props;

        onAssignButtons([{
            id: "1", title: "Tambah Data", icon: () => <PlusIcon />, clickEvent: () => { this.customerDialog.handleShowDialog(); },
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

    doSavingData = (data) => {
        const onErrorCallback = (err) => { this.doShowingNotification(TOAST_TYPE.ERROR, err); };
        const onSuccessCallback = () => {
            this.customerList.refetchData();
            this.customerDialog.handleHideDialog();

            this.doShowingNotification(TOAST_TYPE.SUCCESS, 'Data telah tersimpan');
        };

        handleSaveData(data, onSuccessCallback, onErrorCallback);
    };

    render() {
        return (
            <React.Fragment>
                <CustomerList ref={(c) => { this.customerList = c; }} />
                <CustomerDialog ref={(c) => { this.customerDialog = c; }} onSave={this.doSavingData} />
            </React.Fragment>
        )
    }
}

export default Customer;
