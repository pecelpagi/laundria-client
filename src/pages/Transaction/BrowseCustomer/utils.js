import { useRef } from "react";

export const useRefCollections = () => {
    const dataDialog = useRef(null);

    return {
        dataDialog
    };
};