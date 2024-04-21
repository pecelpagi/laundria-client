import { theme } from '../stitches.config';

import './styles/normalize.css';
import './styles/global.styles.css';

import globalStyles from './styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSalesStart } from '../store/sales/sales.action';
import { fetchCustomersStart } from '../store/customer/customer.action';
import { fetchEmployeesStart } from '../store/employee/employee.action';
import { fetchLaundryPackagesStart } from '../store/laundry_package/laundry_package.action';
import { fetchPaymentTypesStart } from '../store/payment_type/payment_type.action';

export const AppProvider = ({ children }) => {
    globalStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSalesStart({ limit: 5, page: 1, search: '' }));
        dispatch(fetchCustomersStart({ limit: 5, page: 1, search: '' }));
        dispatch(fetchEmployeesStart({ limit: 5, page: 1, search: '' }));
        dispatch(fetchLaundryPackagesStart({ limit: 5, page: 1, search: '' }));
        dispatch(fetchPaymentTypesStart({ limit: 5, page: 1, search: '' }));
    }, [dispatch]);

    return (
        <div className={theme}>
            {children}
        </div>
    );
}

export default AppProvider;