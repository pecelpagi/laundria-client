import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageContext from './PageContext';
import Box from '../../components/Box';
import StyledButton from '../../components/StyledButton';

const Customers = () => {
    const history = useHistory();
    const { customers, onOpenCustomerDetailDialog, keyword } = useContext(PageContext);

    return (
        <Box className='flex flex-col gap-4'>
            <Box
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center'
                }}
            >
                <Box>
                    <div className='font-bold text-base'>Customer</div>
                </Box>
                <Box>
                    <StyledButton
                        onClick={() => { history.push(`/customer?q=${keyword}`); }}
                        className="text-xs py-1 px-2"
                        type="button"
                        variant="white"
                        outlined={false}
                    >
                        Selengkapnya
                    </StyledButton>
                </Box>
            </Box>
            <Box>
                <table className='w-full border-collapse border border-slate-400 text-left'>
                    <thead>
                        <tr>
                            <th className='border p-2'>Nama Lengkap</th>
                            <th className='border p-2'>No. Telepon</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(x => (
                            <tr onClick={() => { onOpenCustomerDetailDialog(x); }} key={x.id} className="hover:bg-slate-50 hover:cursor-pointer">
                                <td className='border p-2'>{x.fullname}</td>
                                <td className='border p-2'>{x.phone}</td>
                            </tr>
                        ))}
                        {customers.length === 0 && (
                            <tr>
                                <td className='border p-2' colSpan={2}>Tidak ada data</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Box>
        </Box>
    )
}

export default Customers;