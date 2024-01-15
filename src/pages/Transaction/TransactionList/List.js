import React, { useContext } from "react";
import Table from "../../../components/Table";
import BaseTableHeader from "../../BaseTableHeader";
import { useBusinessLogic } from "./hooks";
import PageContext from "./PageContext";

const List = () => {
    const { refCollections, onFetchOrderList } = useContext(PageContext);
    const {
        tableColumns, onRowClick, keyword
    } = useBusinessLogic();

    return (
        <Table
            initialFilterText={keyword}
            ref={refCollections.table}
            onRowClick={onRowClick}
            columns={tableColumns}
            onFetch={onFetchOrderList}
            withWrapperRender={({ makeTable, ...rest }) => (
                <div className="bg-white rounded divide-y divide-solid">
                    <BaseTableHeader {...rest} title="Transaksi" />
                    <div className="py-3">
                        {makeTable()}
                    </div>
                </div>
            )}
        />
    );
}

export default List;
