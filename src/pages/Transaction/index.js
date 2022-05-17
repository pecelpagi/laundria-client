import React from 'react';
import {
    PlusIcon, FileTextIcon
} from '@radix-ui/react-icons';
import TransactionList from './TransactionList';

class Transaction extends React.Component {
    componentDidMount = () => {
        const { onAssignButtons, onAssignBreadcrumbs, history } = this.props;

        onAssignButtons([{
            id: "1", title: "Cetak Laporan", icon: () => <FileTextIcon />, clickEvent: () => { }, variant: "white",
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
        return (<TransactionList {...this.props} />);
    }
}

export default Transaction;
