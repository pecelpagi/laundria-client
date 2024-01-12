import React, { useContext } from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../../components/StyledDialog';
import Button from '../../../components/StyledButton';
import Spinner from '../../../components/Spinner';
import PageContext from '../PageContext';

const ContentDialog = ({ isOpen, onCancel }) => {
    const { pageName, onDelete, isDialogLoading } = useContext(PageContext);

    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <DialogTitle>Hapus {pageName}</DialogTitle>
                <CloseButton onClick={onCancel} />
                <div className="flex flex-col gap-4 mt-4">
                    <div className="text-sm">
                        Tindakan ini akan menghilangkan secara permanen dari daftar <b>{pageName}</b> anda. Apakah anda yakin ?
                    </div>
                    <div className="flex flex-row text-sm mt-2 justify-end gap-3">
                        <Button type="button" onClick={onCancel}>Batal</Button>
                        <Button type="button" variant="danger" onClick={onDelete}>Ya, Hapus Data</Button>
                    </div>
                </div>
                {isDialogLoading ? <Spinner /> : null}
            </DialogContent>
        </Dialog>
    )
}

export default ContentDialog