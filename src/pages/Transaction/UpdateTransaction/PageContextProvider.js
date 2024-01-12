import React, { Component } from 'react'
import PageContext from './PageContext';
import * as apiServiceUtility from './api-service.utils';
import Spinner from "../../../components/Spinner";
import PrintInvoice from './PrintInvoice';

class PageContextProvider extends Component {
    state = {
        formData: null,
        readOnlyData: null,
        isFetching: false,
        isSaving: false,
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleAssignButtonsAndBreadcrumbs();
        this.handleFetchData();
    }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    handleSetSaving = (isSaving) => { this.setState({ isSaving }); }

    handleSetFetching = (isFetching) => { this.setState({ isFetching }); }

    handleAssignButtonsAndBreadcrumbs = () => {
        const { onAssignButtons, onAssignBreadcrumbs, refCollections } = this.props;

        onAssignButtons([{
            id: "1", title: "Kembali ke Daftar Transaksi", clickEvent: () => { this.handleBackToList(); }, variant: "white",
        }, {
            id: "2", title: "Cetak Invoice", clickEvent: () => { refCollections.printInvoice.current.handlePrintDocument(); },
        }]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            {
                label: "Transaksi", link: "/transaction",
            },
            "Detail Transaksi",
        ]);
    }

    handleBackToList = () => {
        const { history } = this.props;
        history.push("/transaction");
    }

    handleFetchData = async () => {
        const { match: { params } } = this.props;
        this.handleSetFetching(true);

        await apiServiceUtility.handleFetchData({ onShowNotification: this.doShowingNotification, params, setState: this.setState });

        this.handleSetFetching(false);
    }

    handleSaveData = async (formData) => {
        this.handleSetSaving(true);

        await apiServiceUtility.handleSaveData({ onShowNotification: this.doShowingNotification, formData }, () => {
            this.handleBackToList();
        });

        this.handleSetSaving(false);
    }

    handleChangeFormData = (key, value) => {
        const { formData } = this.state;

        this.setState({
            formData: {
                ...formData, [key]: value,
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
        const { readOnlyData, isSaving } = this.state;
        const { children, refCollections } = this.props;

        const contextValue = this.createContextValue();

        return (
            <PageContext.Provider value={contextValue}>
                {!readOnlyData ? null : children}
                {readOnlyData && <PrintInvoice ref={refCollections.printInvoice} data={readOnlyData} />}
                {isSaving && <Spinner />}
            </PageContext.Provider>
        );
    }
}

export default PageContextProvider;