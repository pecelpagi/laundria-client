import React from "react";
import Form from "./Form";
import PageContexProvider from './PageContextProvider';

const CreateTransaction = (props) => {
    return (
        <PageContexProvider
            {...props}
        >
            <div className="relative">
                <div className="bg-white rounded divide-y divide-solid">
                    <div className="flex p-3 items-center">
                        <div className="text-base font-semibold w-full">Buat Transaksi</div>
                    </div>
                    <div className="p-3">
                        <Form />
                    </div>
                </div>
            </div>
        </PageContexProvider>
    )
}

export default CreateTransaction;