import { useRef } from 'react';

export const useRefCollections = () => {
    const printInvoice = useRef(null);

    return {
        printInvoice
    };
};