import React from 'react';
import { useSelector } from 'react-redux';
import Box from '../../components/Box';
import { RowComponent } from './new-transaction-list.components';
import { selectUnprocessedSalesData, selectUnprocessedSalesIsLoading } from '../../store/sales/sales.selector';
import Spinner from '../../components/Spinner';

const NewTransactionList = () => {
    const laundryTransactions = useSelector(selectUnprocessedSalesData);
    const isLoading = useSelector(selectUnprocessedSalesIsLoading);

    return (
        <Box
            className='mt-0'
        >
            <Box
                className='rounded p-3 items-center'
                css={{
                    display: 'grid',
                    gridTemplateColumns: !isLoading ? '1fr' : '1fr auto',
                    background: '$backgroundSecondary'
                }}
            >
                <Box>
                    <div className='font-bold text-lg'>Order</div>
                    <div>Order baru yang belum di proses</div>
                </Box>
                {isLoading && (
                    <Box
                        className='relative'
                        css={{
                            width: 30, height: 30,
                            '.spinner-container': {
                                width: 30,
                                height: 30
                            }
                        }}>
                        <Spinner text="" />
                    </Box>
                )}
            </Box>
            <Box className='flex flex-col gap-4 mt-4'>
                {laundryTransactions && laundryTransactions.filter((x, i) => i < 3).map(x => (<RowComponent key={x.id} data={x} />))}
            </Box>
        </Box>
    );
}

export default NewTransactionList;