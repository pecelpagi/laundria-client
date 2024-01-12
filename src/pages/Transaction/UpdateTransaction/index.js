import React from "react";
import { useRefCollections } from './utils';
import Form from "./Form";
import PageContexProvider from './PageContextProvider';
import Heading from "./Heading";

const UpdateTransaction = (props) => {
    const refCollections = useRefCollections();

    return (
        <PageContexProvider
            {...props}
            {...{ refCollections }}
        >
            <div className="relative">
                <div className="bg-white rounded divide-y divide-solid">
                    <Heading />
                    <div className="p-3">
                        <Form />
                    </div>
                </div>
            </div>
        </PageContexProvider>
    )
}

export default UpdateTransaction;