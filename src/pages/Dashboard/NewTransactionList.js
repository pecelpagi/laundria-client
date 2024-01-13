import React, { useContext } from 'react';
import PageContext from './PageContext';
import Box from '../../components/Box';
import { RowComponent, RowsSkeleton } from './new-transaction-list.components';

const NewTransactionList = () => {
    const { laundryTransactions } = useContext(PageContext);

    return (
        <Box className='mt-0'>
            <div className='font-bold text-lg'>Order</div>
            <div>Order baru yang belum di proses</div>
            <Box className='flex flex-col gap-4 mt-4'>
                {laundryTransactions && laundryTransactions.filter((x, i) => i < 3).map(x => (<RowComponent key={x.id} data={x} />))}
                {!laundryTransactions && (<RowsSkeleton />)}
            </Box>
        </Box>
    );
}

export default NewTransactionList;