import React, { Component } from 'react'
import moment from "moment";
import numeral from "numeral";
import { useDispatch } from 'react-redux';
import { fetchSalesStart, fetchUnprocessedSalesStart } from '../store/sales/sales.action';
import { fetchCustomersStart } from '../store/customer/customer.action';
import { fetchEmployeesStart } from '../store/employee/employee.action';
import { fetchLaundryPackagesStart } from '../store/laundry_package/laundry_package.action';
import { fetchPaymentTypesStart } from '../store/payment_type/payment_type.action';
import { fetchCompanyProfileStart, fetchMyProfileStart } from '../store/user/user.action';
import { fetchDailyTransactionTotalStart, fetchSummaryStart } from '../store/summary/summary.action';
import MainLayoutContext from './MainLayoutContext';

class ClassComponent extends Component {
    state = {
        isShowingSidebarMenu: true,
    }

    componentDidMount = () => {
        this.handleRegister();
        this.initialFetching();
    }

    handleRegister = () => {
        numeral.register("locale", "id", {
            delimiters: {
                thousands: ".",
                decimal: ",",
            },
            abbreviations: {
                thousand: "k",
                million: "m",
                billion: "b",
                trillion: "t",
            },
            currency: {
                symbol: "Rp ",
            },
        });
        numeral.locale("id");
        moment.locale("id");
    }

    initialFetching = () => {
        const { dispatch } = this.props;

        dispatch(fetchSalesStart({ limit: 5, page: 1, search: '' }));
        dispatch(fetchCustomersStart({ limit: 5, page: 1, search: '' }));
        dispatch(fetchEmployeesStart({ limit: 5, page: 1, search: '' }));
        dispatch(fetchLaundryPackagesStart({ limit: 5, page: 1, search: '' }));
        dispatch(fetchPaymentTypesStart({ limit: 5, page: 1, search: '' }));
        dispatch(fetchCompanyProfileStart());
        dispatch(fetchMyProfileStart());
        dispatch(fetchUnprocessedSalesStart());
        dispatch(fetchDailyTransactionTotalStart());
        dispatch(fetchSummaryStart());
    }

    handleShowingSidebarMenu = (isShowingSidebarMenu = false) => {
        this.setState({ isShowingSidebarMenu });
    }

    createContextValue = () => ({
        ...this.state,
        onShowingSidebarMenu: this.handleShowingSidebarMenu,
    });


    render() {
        const { children } = this.props;

        const contextValue = this.createContextValue();

        return (
            <MainLayoutContext.Provider value={contextValue}>
                {children}
            </MainLayoutContext.Provider>
        )
    }
}

const MainLayoutProvider = (props) => {
    const { children, ...restProps } = props;

    const dispatch = useDispatch();

    return (
        <ClassComponent {...restProps} {...{ dispatch }}>
            {children}
        </ClassComponent>
    );
}

export default MainLayoutProvider;