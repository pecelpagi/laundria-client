import React from 'react';
import { createPageName } from "./utils";
import { useBusinessLogic } from './base-data-list.hooks';
import BaseList from '../../components/BaseList';

const BaseDataList = React.forwardRef((props, ref) => {
    const { onOpenFormDialog, pageUtility, pageType, onShowNotification, keyword, listData } = useBusinessLogic({ ref });

    return (
        <BaseList
            ref={ref}
            title={createPageName(pageType)}
            data={listData.data}
            defaultFilterKeyword={keyword}
            onFetch={listData.onFetch}
            columns={pageUtility.tableColumns}
            totalPage={listData.meta.number_of_pages}
            onRowClick={onOpenFormDialog}
            loading={listData.loading}
        />
    )
});

export default BaseDataList;
