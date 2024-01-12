import React, { Component } from 'react'
import { createFormData, handlePrintDocument } from './utils';
import * as apiServiceUtility from './api-service.utils';
import DialogContext from './DialogContext';

class DialogContextProvider extends Component {
    state = {
        formData: createFormData(),
        reportData: [],
        isDialogLoading: false,
    }

    setState = this.setState.bind(this);

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    setDialogLoading = (isDialogLoading) => { this.setState({ isDialogLoading }); }

    handleStartPrinting = async ({ startDate, endDate }) => {
        const { onClose } = this.props;
        this.setDialogLoading(true);

        await apiServiceUtility.handleFetchReportOrders({ startDate, endDate, setState: this.setState, onShowNotification: this.doShowingNotification }, () => {
            handlePrintDocument({ startDate, endDate });
            onClose();
        });

        this.setDialogLoading(false);
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
        onStartPrinting: this.handleStartPrinting,
        onChangeFormData: this.handleChangeFormData,
    });

    render() {
        const { children } = this.props;

        const contextValue = this.createContextValue();

        return (
            <DialogContext.Provider value={contextValue}>
                {children}
            </DialogContext.Provider>
        )
    }
}

export default DialogContextProvider;