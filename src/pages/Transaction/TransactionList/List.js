import React from 'react'
import BaseList from '../../../components/BaseList'
import { useBusinessLogic } from "./hooks";

const List = () => {
    const {
        tableColumns, onRowClick, keyword, onFetchSales,
        salesData, salesMeta, salesIsLoading,
    } = useBusinessLogic();

  return (
    <BaseList
        title="Transaksi"
        data={salesData}
        defaultFilterKeyword={keyword}
        onFetch={onFetchSales}
        columns={tableColumns}
        totalPage={salesMeta.number_of_pages}
        onRowClick={onRowClick}
        loading={salesIsLoading}
    />
  )
}

export default List