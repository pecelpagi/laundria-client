import React from 'react';
import Table from '../../components/Table';
import BaseTableHeader from '../BaseTableHeader';
import { createPageName } from "./utils";
import { TOAST_TYPE } from '../../mainlayout/enums';
import { useBusinessLogic } from './base-data-list.hooks';

const BaseDataList = React.forwardRef((props, ref) => {
    const { onOpenFormDialog, pageUtility, pageType, onShowNotification, keyword } = useBusinessLogic({ ref });

    return (
        <Table
            initialFilterText={keyword}
            ref={ref}
            onRowClick={onOpenFormDialog}
            columns={pageUtility.tableColumns}
            onFetch={state => pageUtility.handleFetchDataList(state, (err) => { onShowNotification(TOAST_TYPE.ERROR, err); })}
            withWrapperRender={({ makeTable, ...rest }) => (
                <div className="bg-white rounded divide-y divide-solid">
                    <BaseTableHeader {...rest} title={createPageName(pageType)} />
                    <div className="py-3">
                        {makeTable()}
                    </div>
                </div>
            )}
        />
    )
});

export default BaseDataList;
