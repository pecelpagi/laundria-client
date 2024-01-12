import React from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../../components/StyledDialog';
import SearchInput from './SearchInput';
import List from './List';

class DataDialog extends React.Component {
    state = {
        isOpening: false,
    }

    handleShowDialog = () => { this.setState({ isOpening: true }); }

    handleHideDialog = () => { this.setState({ isOpening: false }); }

    render() {
        const { isOpening } = this.state;

        return (
            <Dialog open={isOpening}>
                <DialogContent css={{ padding: 0 }}>
                    <div style={{ padding: 25, paddingBottom: 0 }}>
                        <DialogTitle css={{ borderBottom: 0 }}>Data Customer</DialogTitle>
                        <CloseButton onClick={this.handleHideDialog} />
                    </div>
                    <div
                        style={{
                            borderTop: '1px solid #e7e7e7',
                        }}
                        className="flex flex-col"
                    >
                        <SearchInput />
                        <List />
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}

export default DataDialog;