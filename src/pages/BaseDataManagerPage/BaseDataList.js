import React from 'react';
import Table from '../../components/Table';
import BaseTableHeader from '../BaseTableHeader';
import { createPageName } from "./utils";

export default React.forwardRef(({ onRowClick, onError, utilityService, pageType }, ref) => (
    <Table
        ref={ref}
        onRowClick={onRowClick}
        columns={utilityService.tableColumns}
        onFetch={state => utilityService.handleFetchDataList(state, onError)}
        withWrapperRender={({ makeTable, ...rest }) => (
            <div className="bg-white rounded divide-y divide-solid">
                <BaseTableHeader {...rest} title={createPageName(pageType)} />
                <div className="p-3">
                    {makeTable()}
                </div>
            </div>
        )}
    />
));