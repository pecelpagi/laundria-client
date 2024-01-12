import React, { useContext } from 'react';
import StyledButton from '../../components/StyledButton';
import PageContext from './PageContext';

const StartTransactionButton = () => {
    const { history } = useContext(PageContext);

    return (
        <StyledButton
            onClick={() => { history.push('/transaction/create'); }}
            className="text-xs"
            type="button"
            variant="primary"
        >
            Mulai Transaksi
        </StyledButton>
    )
}

export default StartTransactionButton;