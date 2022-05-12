import React from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, DialogTrigger, CloseButton
} from '../../../components/StyledDialog';
import Form from './Form';

class CustomerDialog extends React.Component {
    state = {
        isOpening: false,
    }

    handleShowDialog = () => { this.setState({ isOpening: true }); }

    handleHideDialog = () => { this.setState({ isOpening: false }); }

    render() {
        const { isOpening } = this.state;
        const { onSave } = this.props;

        return (
            <Dialog open={isOpening}>
                <DialogTrigger />
                <DialogContent>
                    <DialogTitle>Tambah Data</DialogTitle>
                    <CloseButton onClick={this.handleHideDialog} />
                    <Form onClose={this.handleHideDialog} {...{ onSave }} />
                </DialogContent>
            </Dialog>
        );
    }
}

export default CustomerDialog;