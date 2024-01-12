import React, { useContext } from "react";
import FormContextProvider from "./FormContextProvider";
import InformationData from "./InformationData";
import StatusManagement from "./StatusManagement";
import OrderDetail from "./OrderDetail";
import Box from "../../../../components/Box";
import PageContext from "../PageContext";
import Spinner from "../../../../components/Spinner";

const Form = () => {
    const { isFetching, formData } = useContext(PageContext);

    if (isFetching) {
        return (
            <div className="relative h-32"><Spinner /></div>
        )
    }

    if (!isFetching && !formData) {
        return (
            <div className="text-sm flex flex-row items-center h-10">
                <div className="w-1">Data tidak ditemukan</div>
            </div>
        )
    }

    return (
        <FormContextProvider>
            <Box
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                }}
                className="gap-4"
            >
                <Box>
                    <InformationData />
                </Box>
                <Box>
                    <StatusManagement />
                </Box>
            </Box>
            <div className="overflow-x-auto">
                <OrderDetail />
            </div>
        </FormContextProvider>
    )
}

export default Form;
