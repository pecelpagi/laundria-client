import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import PageContext from "./PageContext";

const handleGetKeyword = ({ location }) => {
    const splitLocation = String(location.search).split("q=");

    const keyword = splitLocation.length > 1 ? splitLocation[1] : '';

    return keyword;
}

export const useBusinessLogic = ({ ref }) => {
    const location = useLocation();
    const keyword = handleGetKeyword({ location });
    const { onOpenFormDialog, pageUtility, pageType, onShowNotification } = useContext(PageContext);

    useEffect(() => {
        if (keyword) ref.current.handleSearchData(keyword);
    }, [ref, keyword]);

    return {
        keyword,
        onOpenFormDialog,
        pageUtility,
        pageType,
        onShowNotification,
    }
}