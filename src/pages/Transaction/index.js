import React from 'react';
import {
    PlusIcon, FileTextIcon
} from '@radix-ui/react-icons';
import TransactionList from './TransactionList';
import PrintReportDialog from './PrintReportDialog';

class Transaction extends React.Component {
    componentDidMount = () => {
        const { onAssignButtons, onAssignBreadcrumbs, history } = this.props;

        onAssignButtons([{
            id: "1", title: "Cetak Laporan", icon: () => <FileTextIcon />, clickEvent: () => { this.printReport.handleShowDialog(); }, variant: "white",
        }, {
            id: "2", title: "Tambah Data", icon: () => <PlusIcon />, clickEvent: () => { history.push("/transaction/create"); },
        }]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            "Transaksi",
        ]);
    }

    render() {
        return (
            <div>
                <TransactionList {...this.props} />
                <PrintReportDialog {...this.props} ref={(c) => { this.printReport = c; }} />
            </div>
        );
    }
}

export default Transaction;
