import React, { useContext } from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../components/StyledDialog';
import Button from '../../components/StyledButton';
import Spinner from '../../components/Spinner';
import { createPageName } from './utils';

class DeleteConfirmationDialog extends React.Component {
    state = {
        isOpening: false,
    }

    handleShowDialog = () => { this.setState({ isOpening: true }); }

    handleHideDialog = () => { this.setState({ isOpening: false }); }
    
    handleCancelDialog = () => {
        const { onShowFormDialog } = this.props;

        this.handleHideDialog();
        onShowFormDialog();
    }

    render() {
        const { onDelete, isDialogLoading, pageType } = this.props;
        const { isOpening } = this.state;

        const pageName = createPageName(pageType);

        return (
            <Dialog open={isOpening}>
                <DialogContent>
                    <DialogTitle>Hapus {pageName}</DialogTitle>
                    <CloseButton onClick={this.handleCancelDialog} />
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="text-sm">
                            Tindakan ini akan menghilangkan secara permanen dari daftar <b>{pageName}</b> anda. Apakah anda yakin ?
                        </div>
                        <div className="flex flex-row text-sm mt-2 justify-end gap-3">
                            <Button type="button" onClick={this.handleCancelDialog}>Batal</Button>
                            <Button type="button" variant="danger" onClick={onDelete}>Ya, Hapus Data</Button>
                        </div>
                    </div>
                    {isDialogLoading ? <Spinner /> : null}
                </DialogContent>
            </Dialog>
        );
    }
}

export default React.forwardRef((props, ref) => {
    const contextData = useContext(props.pageContext);

    return <DeleteConfirmationDialog {...props} {...contextData} {...{ ref }} />
});