import React from "react";
import { useRefCollections } from './utils';
import PageContexProvider from './PageContextProvider';
import List from './List';
import PrintReportDialog from '../PrintReportDialog';

const TransactionList = (props) => {
    const refCollections = useRefCollections();

    return (
        <PageContexProvider
            {...props}
            {...{ refCollections }}
        >
            <List />
            <PrintReportDialog ref={refCollections.printReport} />
        </PageContexProvider>
    );
}

export default TransactionList;