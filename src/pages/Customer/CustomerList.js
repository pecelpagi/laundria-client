import React from 'react';
import Table from '../../components/Table';
import { handleFetchCustomerList, tableColumns } from "./utils";

export default React.forwardRef(({ rowClick, onError }, ref) => (
    <Table
        ref={ref}
        rowClick={rowClick}
        columns={tableColumns}
        onFetch={state => handleFetchCustomerList(state, onError)}
        withWrapperRender={({ makeTable, InputSearch, PageSize }) => (
            <div className="bg-white rounded divide-y divide-solid">
                <div className="text-base font-semibold p-3">
                    Customer
                </div>
                <div className="p-3">
                    {makeTable()}
                </div>
            </div>
        )}
    />
));