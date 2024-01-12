import React, { useContext } from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../../components/StyledDialog';
import Spinner from '../../../components/Spinner';
import PageContext from '../PageContext';

const ContentDialog = ({ isOpen, onClose }) => {
    const { formData, renderInputFormDialog, isDialogLoading, ...restContextData } = useContext(PageContext);

    if (!formData) return null;

    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <DialogTitle>{!formData.id ? 'Tambah Data' : 'Edit Data'}</DialogTitle>
                <CloseButton onClick={onClose} />
                {renderInputFormDialog({ onClose, formData, ...restContextData })}
                {isDialogLoading ? <Spinner /> : null}
            </DialogContent>
        </Dialog>
    )
}

export default ContentDialog