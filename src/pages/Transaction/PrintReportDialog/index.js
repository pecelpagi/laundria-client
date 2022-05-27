import React from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../../components/StyledDialog';
import Form from "./Form";
import ReportContainer from "./ReportContainer";
import * as apiService from "../../../data";
import { createFormData, handlePrintDocument } from "./utils";
import Spinner from '../../../components/Spinner';
import { TOAST_TYPE } from '../../../mainlayout/enums';
import { catchError } from '../../../utils';

class PrintReportDialog extends React.Component {
    state = {
        isOpening: false,
        formData: createFormData(),
        reportData: [],
        isDialogLoading: false,
    }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    handleShowDialog = () => { this.setState({ isOpening: true }); }

    handleHideDialog = () => { this.setState({ isOpening: false }); }

    setDialogLoading = (isDialogLoading) => { this.setState({ isDialogLoading }); }

    startPrinting = async (state) => {
        const { startDate, endDate } = state;
        
        try {
            const payload = {
                start_date: startDate,
                end_date: endDate,
            };

            this.setDialogLoading(true);

            const res = await apiService.getReportOrders(payload);

            this.setState({ reportData: res.data }, () => {
                handlePrintDocument(state);
                this.handleHideDialog();
            });
        } catch (e) {
            this.doShowingNotification(TOAST_TYPE.ERROR, catchError(e));
        } finally {
            this.setDialogLoading(false);
        }
    }

    render() {
        const { isOpening, formData, reportData, isDialogLoading } = this.state;

        return (
            <React.Fragment>
                <Dialog open={isOpening}>
                    <DialogContent>
                        <DialogTitle>Cetak Laporan</DialogTitle>
                        <CloseButton onClick={this.handleHideDialog} />
                        <Form {...{ formData }} onClose={this.handleHideDialog} onPrint={this.startPrinting} />
                        {isDialogLoading ? <Spinner /> : null}
                    </DialogContent>
                </Dialog>
                <ReportContainer data={reportData} />
            </React.Fragment>
        );
    }
}

export default PrintReportDialog;