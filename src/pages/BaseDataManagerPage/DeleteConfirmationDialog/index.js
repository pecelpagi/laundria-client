import React from 'react';
import ContentDialog from './ContentDialog';
import PageContext from '../PageContext';

class BaseFormDialog extends React.Component {
    static contextType = PageContext;

    state = {
        isOpen: false,
    }

    handleShowDialog = () => { this.setState({ isOpen: true }); }

    handleHideDialog = () => { this.setState({ isOpen: false }); }

    handleCancelDialog = () => {
        const { onShowFormDialog } = this.context;

        this.handleHideDialog();
        onShowFormDialog();
    }

    render() {
        const { isOpen } = this.state;

        return (
            <ContentDialog {...{ isOpen, onCancel: this.handleCancelDialog }} />
        );
    }
}

export default BaseFormDialog;