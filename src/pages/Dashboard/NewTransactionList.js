import React from "react";
import Table from "../../components/Table";
import { handleFetchOrderList, createTableColumns } from "./utils";

class NewTransactionList extends React.Component {
  handleRowClick = (data) => {
    const { history } = this.props;

    history.push(`/transaction/detail/${data.id}`);
  }

  render() {
    const tableColumns = createTableColumns();

    return (
      <Table
        ref={(c) => { this.table = c; }}
        onRowClick={this.handleRowClick}
        columns={tableColumns}
        onFetch={handleFetchOrderList}
        withWrapperRender={({ makeTable, InputSearch, PageSize }) => (
          <div className="bg-white rounded divide-y divide-solid">
            <div className="flex p-3 items-center">
              <div className="text-base font-semibold w-2/5">Order Terbaru</div>
              <div className="flex w-3/5 justify-end gap-3">
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
    );
  }
}

export default NewTransactionList;
