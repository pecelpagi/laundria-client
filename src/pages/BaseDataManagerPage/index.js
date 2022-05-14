import React from 'react';
import PropTypes from 'prop-types';
import {
    PlusIcon,
} from '@radix-ui/react-icons';
import BaseDataList from './BaseDataList';
import BaseFormDialog from './BaseFormDialog';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import { TOAST_TYPE } from '../../mainlayout/enums';

import { createPageName } from './utils';

class BaseDataManagerPage extends React.Component {
    static propTypes = {
        pageType: PropTypes.string.isRequired,
        utilityService: PropTypes.shape({
            createFormData: PropTypes.func.isRequired,
            handleSaveData: PropTypes.func.isRequired,
            handleDeleteData: PropTypes.func.isRequired,
            handleFetchDataList: PropTypes.func.isRequired,
            tableColumns: PropTypes.array,
        }).isRequired,
        pageContext: PropTypes.object,
        renderInputFormDialog: PropTypes.func.isRequired,
    }

    state = {
        formData: null,
        isDialogLoading: false,
    }

    componentDidMount = () => {
        const { onAssignButtons, onAssignBreadcrumbs, pageType, utilityService } = this.props;

        onAssignButtons([{
            id: "1", title: "Tambah Data", icon: () => <PlusIcon />, clickEvent: () => { this.handleOpenFormDialog(); },
        }]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            createPageName(pageType),
        ]);

        this.setState({ formData: utilityService.createFormData() })
    }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    handleOpenFormDialog = (data = null) => {
        const { utilityService } = this.props;

        const formData = utilityService.createFormData(data);
    
        this.setState({ formData }, () => {
            this.baseFormDialog.handleShowDialog();
        });
    }

    handleSetDialogLoading = (loading) => { this.setState({ isDialogLoading: loading }); }

    doSavingData = async (data) => {
        const { utilityService } = this.props;

        const onErrorCallback = (err) => { this.doShowingNotification(TOAST_TYPE.ERROR, err); };
        const onSuccessCallback = () => {
            this.baseDataList.refetchData();
            this.baseFormDialog.handleHideDialog();

            this.doShowingNotification(TOAST_TYPE.SUCCESS, 'Data telah tersimpan');
        };

        this.handleSetDialogLoading(true);
        await utilityService.handleSaveData(data, onSuccessCallback, onErrorCallback);
        this.handleSetDialogLoading(false);
    };

    doDeletingData = async () => {
        const { utilityService } = this.props;
        const { formData } = this.state;

        const onSuccessCallback = () => {
            this.baseDataList.refetchData();
            this.baseFormDialog.handleHideDialog();
            this.deleteConfirmationDialog.handleHideDialog();

            this.doShowingNotification(TOAST_TYPE.SUCCESS, 'Data telah dihapus');
        };

        const onErrorCallback = (err) => {
            this.doShowingNotification(TOAST_TYPE.ERROR, err);
            this.deleteConfirmationDialog.handleHideDialog();
        };

        this.handleSetDialogLoading(true);
        await utilityService.handleDeleteData(formData, onSuccessCallback, onErrorCallback);
        this.handleSetDialogLoading(false);
    };

    handleFetchError = (err) => { this.doShowingNotification(TOAST_TYPE.ERROR, err); }

    createContextValue = () => {
        const { utilityService, pageType } = this.props;
        const { formData, isDialogLoading } = this.state;

        return {
            formData,
            isDialogLoading,
            utilityService,
            pageType,
            onShowFormDialog: () => { this.baseFormDialog.handleShowDialog(); },
            onHideFormDialog: () => { this.baseFormDialog.handleHideDialog(); },
            onShowConfirmationDialog: () => { this.deleteConfirmationDialog.handleShowDialog(); },
            onHideConfirmationDialog: () => { this.deleteConfirmationDialog.handleHideDialog(); },
            onSave: this.doSavingData,
            onDelete: this.doDeletingData,
        }
    }

    render() {
        const { formData } = this.state;
        const { pageContext, renderInputFormDialog, pageType, utilityService } = this.props;

        const ComponentContext = pageContext;

        if (!formData) return null;

        return (
            <ComponentContext.Provider value={this.createContextValue()}>
                <BaseDataList
                    ref={(c) => { this.baseDataList = c; }}
                    onRowClick={this.handleOpenFormDialog}
                    onError={this.handleFetchError}
                    {...{ pageType, utilityService }}
                />
                <BaseFormDialog
                    ref={(c) => { this.baseFormDialog = c; }}
                    {...{ renderInputFormDialog, pageContext }}
                />
                <DeleteConfirmationDialog
                    ref={(c) => { this.deleteConfirmationDialog = c; }}
                    {...{ pageContext }}
                />
            </ComponentContext.Provider>
        )
    }
}

export default BaseDataManagerPage;
