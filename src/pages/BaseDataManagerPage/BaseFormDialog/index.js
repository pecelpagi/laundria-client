import React from 'react';
import ContentDialog from './ContentDialog';

class BaseFormDialog extends React.Component {
    state = {
        isOpen: false,
    }

    handleShowDialog = () => { this.setState({ isOpen: true }); }

    handleHideDialog = () => { this.setState({ isOpen: false }); }

    render() {
        const { isOpen } = this.state;

        return (
            <ContentDialog {...{ isOpen, onClose: this.handleHideDialog }} />
        );
    }
}

export default BaseFormDialog;