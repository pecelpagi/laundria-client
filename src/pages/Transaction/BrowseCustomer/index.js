import React from "react";
import BrowseInput from "../../../components/BrowseInput";
import DataDialog from "./DataDialog";
import ComponentContextProvider from "./ComponentContextProvider";
import { useRefCollections } from "./utils";

const Index = ({ selectedData, onChange }) => {
    const refCollections = useRefCollections();

    return (
        <ComponentContextProvider {...{ onChange, selectedData, refCollections }}>
            <BrowseInput
                label="Customer"
                name="customerId"
                value={selectedData}
                required
                onBrowse={() => { refCollections.dataDialog.current.handleShowDialog(); }}
            />
            <DataDialog
                ref={refCollections.dataDialog}
            />
        </ComponentContextProvider>
    );
}

export default Index;