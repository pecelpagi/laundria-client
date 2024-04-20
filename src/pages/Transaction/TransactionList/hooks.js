import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createTableColumns } from "./utils";
import { useMemo } from "react";
import { selectSalesData, selectSalesIsLoading, selectSalesMeta } from "../../../store/sales/sales.selector";
import { fetchSalesStart } from '../../../store/sales/sales.action';

const handleGetKeyword = ({ location }) => {
    const splitLocation = String(location.search).split("q=");

    const keyword = splitLocation.length > 1 ? splitLocation[1] : '';

    return keyword;
}

export const useBusinessLogic = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const keyword = handleGetKeyword({ location });
    const tableColumns = useMemo(() => createTableColumns(), []);

    const salesData = useSelector(selectSalesData);
    const salesMeta = useSelector(selectSalesMeta);
    const salesIsLoading = useSelector(selectSalesIsLoading);

    const handleRowClick = (data) => { history.push(`/transaction/detail/${data.id}`); }

    return {
        tableColumns,
        keyword,
        salesData,
        salesMeta,
        salesIsLoading,
        onRowClick: handleRowClick,
        onFetchSales: (payload) => dispatch(fetchSalesStart(payload)),
    }
}