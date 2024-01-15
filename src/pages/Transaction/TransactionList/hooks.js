import { useHistory, useLocation } from "react-router-dom";
import { createTableColumns } from "./utils";
import { useContext, useEffect, useMemo } from "react";
import PageContext from "./PageContext";

const handleGetKeyword = ({ location }) => {
    const splitLocation = String(location.search).split("q=");

    const keyword = splitLocation.length > 1 ? splitLocation[1] : '';

    return keyword;
}

export const useBusinessLogic = () => {
    const { refCollections } = useContext(PageContext);
    const history = useHistory();
    const location = useLocation();
    const keyword = handleGetKeyword({ location });
    const tableColumns = useMemo(() => createTableColumns(), []);

    useEffect(() => {
        if (keyword) refCollections.table.current.handleSearchData(keyword);
    }, [refCollections.table, keyword]);

    const handleRowClick = (data) => { history.push(`/transaction/detail/${data.id}`); }

    return {
        tableColumns,
        keyword,
        onRowClick: handleRowClick,
    }
}