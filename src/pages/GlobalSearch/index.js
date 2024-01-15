import React from 'react'
import PageContextProvider from './PageContextProvider'
import Box from '../../components/Box';
import LaundryTransactions from './LaundryTransactions';
import Customers from './Customers';
import { useRefCollections } from './utils';
import CustomerDetailDialog from './CustomerDetailDialog';

const Index = (props) => {
    const refCollections = useRefCollections();

    return (
        <PageContextProvider
            {...props}
            {...{ refCollections }}
        >
            <Box
                className='mt-6 gap-6'
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                }}
            >
                <Box>
                    <LaundryTransactions />
                </Box>
                <Box>
                    <Customers />
                </Box>
            </Box>
            <CustomerDetailDialog ref={refCollections.customerDetailDialog} />
        </PageContextProvider>
    )
}

export default Index;