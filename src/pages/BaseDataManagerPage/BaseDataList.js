import React, { useContext } from 'react';
import Table from '../../components/Table';
import BaseTableHeader from '../BaseTableHeader';
import { createPageName } from "./utils";
import PageContext from './PageContext';
import { TOAST_TYPE } from '../../mainlayout/enums';

const BaseDataList = React.forwardRef((props, ref) => {
    const { onOpenFormDialog, pageUtility, pageType, onShowNotification } = useContext(PageContext);

    return (
        <Table
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
