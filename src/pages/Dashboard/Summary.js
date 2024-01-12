import React from 'react';
import { SummaryItem, SummarySkeleton } from './summary.components';
import Box from '../../components/Box';
import { useContext } from 'react';
import PageContext from './PageContext';

const Summary = () => {
    const { summary } = useContext(PageContext);

    if (!summary) {
        return (
            <Box className='mt-6'>
                <SummarySkeleton />
            </Box>
        )
    }

    return (
        <Box
            css={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                background: '$backgroundTertiary',
                padding: '15px 0px',
            }}
            className='flex gap-4 rounded mt-6'
        >
            <SummaryItem label="Jumlah Customer" amount={summary.total_data_customer} />
            <SummaryItem label="Order Baru" amount={summary.total_data_new_orders} />
            <SummaryItem label="Total Order" amount={summary.total_data_orders} />
        </Box>
    );
}

export default Summary;