import React, { Component } from 'react'
import PageContext from './PageContext';
import * as apiServiceUtility from './api-service.utils';
import Spinner from "../../../components/Spinner";
import { createFormData } from '../utils';

class PageContextProvider extends Component {
    state = {
        formData: createFormData(),
        isSaving: false,
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleAssignButtonsAndBreadcrumbs();
    }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    handleSetSaving = (isSaving) => { this.setState({ isSaving }); }

    handleSetFetching = (isFetching) => { this.setState({ isFetching }); }

    handleAssignButtonsAndBreadcrumbs = () => {
        const { onAssignButtons, onAssignBreadcrumbs } = this.props;

        onAssignButtons([{
            id: "1", title: "Batal", clickEvent: () => { this.handleBackToList(); }, variant: "white",
            type: 'button',
        }, {
            id: "2", title: "Simpan", clickEvent: () => { }, form: "create-transaction-form",
            type: 'submit',
        }]);

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

    handleBackToList = () => {
        const { history } = this.props;
        history.push("/transaction");
    }

    handleSaveData = async (formData) => {
        this.handleSetSaving(true);

        await apiServiceUtility.handleSaveData({ onShowNotification: this.doShowingNotification, formData }, () => {
            this.handleBackToList();
        });

        this.handleSetSaving(false);
    }

    handleChangeFormData = (newFormData = {}) => {
        const { formData } = this.state;

        this.setState({
            formData: {
                ...formData, ...newFormData,
            },
        });
    };

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onSaveData: this.handleSaveData,
        onChangeFormData: this.handleChangeFormData,
    });

    render() {
        const { isSaving } = this.state;
        const { children } = this.props;

        const contextValue = this.createContextValue();

        return (
            <PageContext.Provider value={contextValue}>
                {children}
                {isSaving && <Spinner />}
            </PageContext.Provider>
        );
    }
}

export default PageContextProvider;