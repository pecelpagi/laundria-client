import React from 'react';
import Table from '../../components/Table';
import { createPageName } from "./utils";

export default React.forwardRef(({ onRowClick, onError, utilityService, pageType }, ref) => (
    <Table
        ref={ref}
        onRowClick={onRowClick}
        columns={utilityService.tableColumns}
        onFetch={state => utilityService.handleFetchDataList(state, onError)}
        withWrapperRender={({ makeTable, InputSearch, PageSize }) => (
            <div className="bg-white rounded divide-y divide-solid">
                <div className="flex p-3 items-center">
                    <div className="text-base font-semibold w-3/5">{createPageName(pageType)}</div>
                    <div className="flex w-2/5 justify-end gap-3">
                        <InputSearch />
                        <PageSize />
                    </div>
                </div>
                <div className="p-3">
                    {makeTable()}
                </div>
            </div>
        )}
    />
));