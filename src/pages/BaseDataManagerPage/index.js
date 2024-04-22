import React from 'react'
import PageContextProvider from './PageContextProvider';
import { useRefCollections } from './utils';
import BaseDataList from './V2BaseDataList';
import BaseFormDialog from './BaseFormDialog';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';

const BaseDataManagerPage = (props) => {
    const refCollections = useRefCollections();

    return (
        <PageContextProvider
            {...props}
            {...{ refCollections }}
        >
            <BaseDataList
                ref={refCollections.baseDataList}
            />
            <BaseFormDialog
                ref={refCollections.baseFormDialog}
            />
            <DeleteConfirmationDialog
                ref={refCollections.deleteConfirmationDialog}
            />
        </PageContextProvider>
    )
}

export default BaseDataManagerPage;