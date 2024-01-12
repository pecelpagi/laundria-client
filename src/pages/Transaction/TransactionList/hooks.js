import { useHistory } from "react-router-dom";
import { createTableColumns } from "./utils";
import { useMemo } from "react";

export const useBusinessLogic = () => {
    const history = useHistory();
    const tableColumns = useMemo(() => createTableColumns(), []);
    
    const handleRowClick = (data) => { history.push(`/transaction/detail/${data.id}`); }
    
    return {
        tableColumns,
        onRowClick: handleRowClick,
    }
}