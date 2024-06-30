import React from 'react';
import { useSelector } from 'react-redux';
import { SummaryItem, SummarySkeleton } from './summary.components';
import Box from '../../components/Box';
import { selectSummaryData } from '../../store/summary/summary.selector';

const Summary = () => {
    const summary = useSelector(selectSummaryData);

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