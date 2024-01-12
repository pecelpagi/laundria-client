import Box from '../../components/Box';
import { CalendarIcon } from '@radix-ui/react-icons';
import StyledButton from '../../components/StyledButton';
import { styled } from '../../stitches.config';
import { useContext } from 'react';
import PageContext from './PageContext';

const RowBox = styled('div', {
    background: '$backgroundTertiary',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
});

export const RowComponent = ({ data }) => {
    const { history } = useContext(PageContext);

    return (
        <RowBox className='text-sm p-3 pr-4 gap-3'>
            <Box
                className='p-3 flex flex-col gap-1'
                css={{
                    borderRadius: 8,
                    background: '$backgroundSecondary',
                }}
            >
                <div>No. Order</div>
                <div className='font-bold'>{data.sales_number}</div>
            </Box>
            <Box className='flex flex-col gap-0'>
                <div className='font-bold text-base'>{data.customer_name}</div>
                <div>{data.laundry_package_name}</div>
            </Box>
            <Box className='flex-1 flex justify-center'>
                <div className='flex items-center gap-1 mb-1'><CalendarIcon />{data.createdAt}</div>
            </Box>
            <Box>
                <StyledButton
                    onClick={() => { history.push(`/transaction/detail/${data.id}`) }}
                    className="font-bold"
                    type="button"
                    variant="primary"
                >
                    Proses
                </StyledButton>
            </Box>
        </RowBox>
    );
}