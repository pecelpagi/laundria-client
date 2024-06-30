import React from 'react'
import PageContextProvider from './PageContextProvider'
import Form from "./Form";
import Box from '../../components/Box';

const Index = (props) => {
    return (
        <PageContextProvider {...props}>
            <div className="bg-white rounded divide-y divide-solid">
                <Box
                    className="p-3 items-center"
                >
                    <div className="text-base font-semibold w-full">Identitas Aplikasi</div>
                </Box>
                <div className="p-3">
                    <Form />
                </div>
            </div>
        </PageContextProvider>
    )
}

export default Index;