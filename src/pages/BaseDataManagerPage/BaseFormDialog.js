import React, { useContext } from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../components/StyledDialog';
import Spinner from '../../components/Spinner';

class BaseFormDialog extends React.Component {
    state = {
        isOpening: false,
    }

    handleShowDialog = () => { this.setState({ isOpening: true }); }

    handleHideDialog = () => { this.setState({ isOpening: false }); }

    render() {
        const { isOpening } = this.state;
        const { formData, isDialogLoading, renderInputFormDialog } = this.props;

        return (
            <Dialog open={isOpening}>
                <DialogContent>
                    <DialogTitle>{!formData.id ? 'Tambah Data' : 'Edit Data'}</DialogTitle>
                    <CloseButton onClick={this.handleHideDialog} />
                    {renderInputFormDialog({ onClose: this.handleHideDialog, ...this.props })}
                    {isDialogLoading ? <Spinner /> : null}
                </DialogContent>
            </Dialog>
        );
    }
}

export default React.forwardRef((props, ref) => {
    const contextData = useContext(props.pageContext);

    return <BaseFormDialog {...props} {...contextData} {...{ ref }} />
});