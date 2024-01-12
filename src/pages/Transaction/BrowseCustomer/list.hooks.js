import { useCallback, useContext, useEffect, useRef, useState } from "react";
import ComponentContext from './ComponentContext';

export const useBusinessLogic = () => {
    const { customers, selectedData, onNextPage, search } = useContext(ComponentContext);
    const [activeId, setActiveId] = useState(selectedData ? selectedData.id : "");
    const wrapperRef = useRef(null);

    let mergedCustomers = [...customers];

    if (selectedData.id) {
        const filteredCustomers = customers.filter(x => (String(x.id) !== String(selectedData.id)));
        mergedCustomers = [selectedData, ...filteredCustomers];
    }

    const handleScrollListener = useCallback(() => {
        const elementRef = wrapperRef.current;
        const hasNext = ((elementRef.offsetHeight + elementRef.scrollTop) >= elementRef.scrollHeight);

        if (hasNext) onNextPage();
    }, [onNextPage]);

    useEffect(() => {
        wrapperRef.current.addEventListener("scroll", handleScrollListener);

        return () => { window.removeEventListener('scroll', handleScrollListener); }
    }, [handleScrollListener]);

    useEffect(() => {
        if (wrapperRef) wrapperRef.current.scrollTop = 0
    }, [search]);

    return { customers: mergedCustomers, activeId, setActiveId, wrapperRef, search };
}