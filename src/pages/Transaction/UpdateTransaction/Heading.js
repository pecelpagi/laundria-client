import React, { useContext } from 'react'
import Box from '../../../components/Box';
import Button from '../../../components/StyledButton';
import PageContext from './PageContext';
import { ORDER_STATUS } from '../../../enums';

const Heading = () => {
    const { readOnlyData } = useContext(PageContext);

    const isReadOnly = !(readOnlyData.order_status !== ORDER_STATUS.PICKED_UP && readOnlyData.order_status !== ORDER_STATUS.CANCELED);

    return (
        <Box
            css={{
                display: 'grid',
                gridTemplateColumns: '1fr auto'
            }}
            className="p-3 items-center"
        >
            <div className="text-base font-semibold">Detail Transaksi</div>
            {!isReadOnly && (
                <Box>
                    <Button className="text-xs" type="submit" form="update-transaction-form" variant="primary">Simpan</Button>
                </Box>
            )}
        </Box>
    )
}

export default Heading