import { theme } from '../stitches.config';

import './styles/normalize.css';
import './styles/global.styles.css';

import globalStyles from './styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSalesStart } from '../store/sales/sales.action';

export const AppProvider = ({ children }) => {
    globalStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSalesStart({ limit: 5, page: 1, search: '' }))
    }, [dispatch]);

    return (
        <div className={theme}>
            {children}
        </div>
    );
}

export default AppProvider;