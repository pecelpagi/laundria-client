import React from 'react';
import {
    PlusIcon, FileTextIcon
} from '@radix-ui/react-icons';
import { connect } from 'react-redux';
import PageContext from './PageContext';
import { fetchSalesStart } from '../../../store/sales/sales.action';

class PageContextProvider extends React.Component {
    componentDidMount = () => {
        this.handleAssignButtonsAndBreadcrumbs();
    }

    componentWillUnmount = () => {
        const { dispatchFetchSalesStart } = this.props;

        dispatchFetchSalesStart({ limit: 5, page: 1, search: '' })
    }

    handleAssignButtonsAndBreadcrumbs = () => {
        const { onAssignButtons, onAssignBreadcrumbs, history, refCollections } = this.props;

        onAssignButtons([{
            id: "1", title: "Cetak Laporan", icon: () => <FileTextIcon />, clickEvent: () => { refCollections.printReport.current.handleShowDialog(); }, variant: "white",
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

    createContextValue = () => ({
        ...this.props,
    });

    render() {
        const { children } = this.props;

        const contextValue = this.createContextValue();

        return (
            <PageContext.Provider value={contextValue}>
                {children}
            </PageContext.Provider>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        dispatchFetchSalesStart: (payload) => dispatch(fetchSalesStart(payload)),
    }
}

export default connect(null, mapDispatchToProps)(PageContextProvider);
