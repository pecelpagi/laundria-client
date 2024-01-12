import React from 'react';
import NewTransactionList from './NewTransactionList';
import ChartData from './ChartData';
import Summary from './Summary';
import Box from '../../components/Box';
import PageContextProvider from './PageContextProvider'
import StartTransactionButton from './StartTransactionButton';

const Dashboard = (props) => {
    return (
        <PageContextProvider {...props}>
            <div className='mt-6'>
                <Box
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        alignItems: 'center'
                    }}
                >
                    <Box>
                        <div className='font-bold text-lg'>Halo, Administrator !</div>
                        <div>Selamat datang di Laundria.</div>
                    </Box>
                    <Box>
                        <StartTransactionButton />
                    </Box>
                </Box>
                <Summary />
            </div>
            <div className="flex gap-4 mt-6">
                <div className="flex-1">
                    <ChartData />
                </div>
                <div className="flex-1">
                    <NewTransactionList />
                </div>
            </div>
        </PageContextProvider>
    )
}

export default Dashboard;
