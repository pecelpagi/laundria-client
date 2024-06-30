import React from 'react';
import { useSelector } from 'react-redux';
import Box from '../../components/Box';
import { RowComponent, RowsSkeleton } from './new-transaction-list.components';
import { selectUnprocessedSalesData } from '../../store/sales/sales.selector';

const NewTransactionList = () => {
    const laundryTransactions = useSelector(selectUnprocessedSalesData);

    return (
        <Box
            className='mt-0'
        >
            <Box
                className='rounded p-3'
                css={{
                    background: '$backgroundSecondary'
                }}
            >
                <div className='font-bold text-lg'>Order</div>
                <div>Order baru yang belum di proses</div>
            </Box>
            <Box className='flex flex-col gap-4 mt-4'>
                {laundryTransactions && laundryTransactions.filter((x, i) => i < 3).map(x => (<RowComponent key={x.id} data={x} />))}
                {!laundryTransactions && (<RowsSkeleton />)}
            </Box>
        </Box>
    );
}

export default NewTransactionList;