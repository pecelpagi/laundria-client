import React from 'react';
import ContentDialog from './ContentDialog';
import DialogContextProvider from './DialogContextProvider';

class PrintReportDialog extends React.Component {
    state = {
        isOpening: false,
    }

    handleShowDialog = () => { this.setState({ isOpening: true }); }

    handleHideDialog = () => { this.setState({ isOpening: false }); }

    render() {
        const { isOpening } = this.state;

        return (
            <DialogContextProvider {...this.props} {...{ isOpening, onClose: this.handleHideDialog }}>
                <ContentDialog />
            </DialogContextProvider>
        );
    }
}

export default PrintReportDialog;