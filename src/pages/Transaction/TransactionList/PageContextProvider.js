import React from 'react';
import {
    PlusIcon, FileTextIcon
} from '@radix-ui/react-icons';
import * as apiServiceUtility from './api-service.utils';
import PageContext from './PageContext';

class PageContextProvider extends React.Component {
    componentDidMount = () => {
        this.handleAssignButtonsAndBreadcrumbs();
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
        onFetchOrderList: apiServiceUtility.handleFetchOrderList,
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

export default PageContextProvider;
