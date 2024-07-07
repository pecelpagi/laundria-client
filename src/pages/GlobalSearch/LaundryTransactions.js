import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageContext from './PageContext';
import Box from '../../components/Box';
import StyledButton from '../../components/StyledButton';
import { reformatDateTimeAsText } from '../../utils';

const LaundryTransactions = () => {
    const history = useHistory();
    const { laundryTransactions, keyword } = useContext(PageContext);

    return (
        <Box
            className='flex flex-col rounded divide-y divide-solid'
            css={{
                background: '$backgroundSecondary'
            }}
        >
            <Box
                className='p-3'
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center'
                }}
            >
                <Box>
                    <div className='font-bold text-base'>Transaksi</div>
                </Box>
                <Box>
                    <StyledButton
                        onClick={() => { history.push(`/transaction?q=${keyword}`); }}
                        className="text-xs py-1 px-2"
                        type="button"
                        variant="primary"
                        outlined={false}
                    >
                        Selengkapnya
                    </StyledButton>
                </Box>
            </Box>
            <Box>
                <table className='w-full border-collapse table-auto w-full text-left'>
                    <thead>
                        <tr>
                            <th className='border-b-2 p-3'>Tgl. Transaksi</th>
                            <th className='border-b-2 p-3'>No. Order</th>
                            <th className='border-b-2 p-3'>Customer</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-solid">
                        {laundryTransactions.map(x => (
                            <tr onClick={() => { history.push(`/transaction/detail/${x.id}`); }} key={x.id} className="hover:bg-slate-50 hover:cursor-pointer">
                                <td className='p-3'>{reformatDateTimeAsText(x.created_at)}</td>
                                <td className='p-3'>{x.sales_number}</td>
                                <td className='p-3'>{x.customer_name}</td>
                            </tr>
                        ))}
                        {laundryTransactions.length === 0 && (
                            <tr>
                                <td className='p-3' colSpan={3}>Tidak ada data</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Box>
        </Box>
    )
}

export default LaundryTransactions;