import React from 'react';
import {
    PlusIcon,
} from '@radix-ui/react-icons';
import PropTypes from 'prop-types';
import { createPageName } from './utils';
import { TOAST_TYPE } from '../../mainlayout/enums';
import PageContext from './PageContext';

class PageContextProvider extends React.Component {
    state = {
        formData: null,
        isDialogLoading: false,
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        const { pageUtility } = this.props;

        this.handleAssignButtonsAndBreadcrumbs();
        this.setState({ formData: pageUtility.createFormData() })
    }

    handleAssignButtonsAndBreadcrumbs = () => {
        const { onAssignButtons, onAssignBreadcrumbs, pageType } = this.props;

        onAssignButtons([{
            id: "1", title: "Tambah Data", icon: () => <PlusIcon />, clickEvent: () => { this.handleOpenFormDialog(); },
        }]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            createPageName(pageType),
        ]);
    }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    handleOpenFormDialog = (data = null) => {
        const { pageUtility, refCollections } = this.props;

        const formData = pageUtility.createFormData(data);

        this.setState({ formData }, () => {
            refCollections.baseFormDialog.current.handleShowDialog();
        });
    }

    handleSetDialogLoading = (loading) => { this.setState({ isDialogLoading: loading }); }

    doSavingData = async (data) => {
        const { pageUtility, refCollections } = this.props;

        const onErrorCallback = (err) => { this.doShowingNotification(TOAST_TYPE.ERROR, err); };
        const onSuccessCallback = () => {
            refCollections.baseDataList.current.refetchData();
            refCollections.baseFormDialog.current.handleHideDialog();

            this.doShowingNotification(TOAST_TYPE.SUCCESS, 'Data telah tersimpan');
        };

        this.handleSetDialogLoading(true);
        await pageUtility.handleSaveData(data, onSuccessCallback, onErrorCallback);
        this.handleSetDialogLoading(false);
    };

    doDeletingData = async () => {
        const { pageUtility, refCollections } = this.props;
        const { formData } = this.state;

        const onSuccessCallback = () => {
            refCollections.baseDataList.current.refetchData();
            refCollections.baseFormDialog.current.handleHideDialog();
            refCollections.deleteConfirmationDialog.current.handleHideDialog();

            this.doShowingNotification(TOAST_TYPE.SUCCESS, 'Data telah dihapus');
        };

        const onErrorCallback = (err) => {
            this.doShowingNotification(TOAST_TYPE.ERROR, err);
            refCollections.deleteConfirmationDialog.current.handleHideDialog();
        };

        this.handleSetDialogLoading(true);
        await pageUtility.handleDeleteData(formData, onSuccessCallback, onErrorCallback);
        this.handleSetDialogLoading(false);
    };

    createContextValue = () => {
        const { refCollections, pageType } = this.props;

        const pageName = createPageName(pageType);

        return {
            ...this.props,
            ...this.state,
            pageName,
            onShowNotification: this.doShowingNotification,
            onOpenFormDialog: this.handleOpenFormDialog,
            onShowFormDialog: () => { refCollections.baseFormDialog.current.handleShowDialog(); },
            onHideFormDialog: () => { refCollections.baseFormDialog.current.handleHideDialog(); },
            onShowConfirmationDialog: () => { refCollections.deleteConfirmationDialog.current.handleShowDialog(); },
            onHideConfirmationDialog: () => { refCollections.deleteConfirmationDialog.current.handleHideDialog(); },
            onSave: this.doSavingData,
            onDelete: this.doDeletingData,
        }
    }

    render() {
        const { children } = this.props;

        const contextValue = this.createContextValue();

        return (
            <PageContext.Provider value={contextValue}>
                {children}
            </PageContext.Provider>
        );
    }
}

PageContextProvider.propTypes = {
    pageType: PropTypes.string.isRequired,
    pageUtility: PropTypes.shape({
        createFormData: PropTypes.func.isRequired,
        handleSaveData: PropTypes.func.isRequired,
        handleDeleteData: PropTypes.func.isRequired,
        handleFetchDataList: PropTypes.func.isRequired,
        tableColumns: PropTypes.array,
    }).isRequired,
    renderInputFormDialog: PropTypes.func.isRequired,
};

export default PageContextProvider;