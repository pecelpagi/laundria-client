import { useCallback, useContext, useEffect, useState } from "react";
import ComponentContext from './ComponentContext';

let searchTimeout = null;

export const useBusinessLogic = () => {
    const { onSearchData, search } = useContext(ComponentContext);
    const [value, setValue] = useState(search);

    useEffect(() => {
        return () => {
            if (searchTimeout) clearTimeout(searchTimeout);
        };
    }, []);

    const handleInputKeyword = useCallback((val) => {
        setValue(val);

        if (searchTimeout) clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            onSearchData(val);
        }, 500);
    }, [onSearchData]);

    return {
        value, onInputKeyword: handleInputKeyword,
    };
}