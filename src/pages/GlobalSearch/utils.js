import { useRef } from "react";

export const useRefCollections = () => {
    const customerDetailDialog = useRef(null);

    return {
        customerDetailDialog
    };
};