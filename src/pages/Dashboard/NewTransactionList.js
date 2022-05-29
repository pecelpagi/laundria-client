import React from "react";
import Table from "../../components/Table";
import BaseTableHeader from "../BaseTableHeader";
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
        withWrapperRender={({ makeTable, ...rest }) => (
          <div className="bg-white rounded divide-y divide-solid">
            <BaseTableHeader {...rest} title="Order Terbaru" />
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
