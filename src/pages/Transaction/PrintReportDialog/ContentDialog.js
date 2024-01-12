import React, { useContext } from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../../components/StyledDialog';
import Form from "./Form";
import ReportContainer from "./ReportContainer";
import Spinner from '../../../components/Spinner';
import DialogContext from './DialogContext';

const ContentDialog = () => {
    const { isDialogLoading, isOpening, onClose } = useContext(DialogContext);

    return (
        <React.Fragment>
            <Dialog open={isOpening}>
                <DialogContent>
                    <DialogTitle>Cetak Laporan</DialogTitle>
                    <CloseButton onClick={onClose} />
                    <Form />
                    {isDialogLoading ? <Spinner /> : null}
                </DialogContent>
            </Dialog>
            <ReportContainer />
        </React.Fragment>
    )
}

export default ContentDialog;