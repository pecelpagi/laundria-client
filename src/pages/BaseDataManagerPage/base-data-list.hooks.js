import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import queryString from 'query-string';
import PageContext from "./PageContext";
import { selectCustomersData, selectCustomersIsLoading, selectCustomersMeta } from "../../store/customer/customer.selector";
import { selectEmployeesData, selectEmployeesIsLoading, selectEmployeesMeta } from "../../store/employee/employee.selector";
import { selectLaundryPackagesData, selectLaundryPackagesIsLoading, selectLaundryPackagesMeta } from "../../store/laundry_package/laundry_package.selector";
import { selectPaymentTypesData, selectPaymentTypesIsLoading, selectPaymentTypesMeta } from "../../store/payment_type/payment_type.selector";
import { PAGE_TYPE } from "./enums";
import { fetchCustomersStart } from '../../store/customer/customer.action';
import { fetchEmployeesStart } from '../../store/employee/employee.action';
import { fetchLaundryPackagesStart } from '../../store/laundry_package/laundry_package.action';
import { fetchPaymentTypesStart } from '../../store/payment_type/payment_type.action';

const handleGetKeyword = ({ location }) => {
    const parsed = queryString.parse(location.search);

    if (!('q' in parsed)) return '';

    const keyword = parsed.q;

    return keyword;
}

const useListData = (pageType) => {
    const dispatch = useDispatch();
    const customersData = useSelector(selectCustomersData);
    const customersMeta = useSelector(selectCustomersMeta);
    const customersIsLoading = useSelector(selectCustomersIsLoading);

    const employeesData = useSelector(selectEmployeesData);
    const employeesMeta = useSelector(selectEmployeesMeta);
    const employeesIsLoading = useSelector(selectEmployeesIsLoading);

    const laundryPackagesData = useSelector(selectLaundryPackagesData);
    const laundryPackagesMeta = useSelector(selectLaundryPackagesMeta);
    const laundryPackagesIsLoading = useSelector(selectLaundryPackagesIsLoading);

    const paymentTypesData = useSelector(selectPaymentTypesData);
    const paymentTypesMeta = useSelector(selectPaymentTypesMeta);
    const paymentTypesIsLoading = useSelector(selectPaymentTypesIsLoading);

    let retval = null;

    switch (pageType) {
        case PAGE_TYPE.CUSTOMER:
            retval = {
                data: customersData,
                meta: customersMeta,
                loading: customersIsLoading,
                onFetch: (payload) => dispatch(fetchCustomersStart(payload)),
            };
            break;
        case PAGE_TYPE.EMPLOYEE:
            retval = {
                data: employeesData,
                meta: employeesMeta,
                loading: employeesIsLoading,
                onFetch: (payload) => dispatch(fetchEmployeesStart(payload)),
            };
            break;
        case PAGE_TYPE.LAUNDRY_PACKAGE:
            retval = {
                data: laundryPackagesData,
                meta: laundryPackagesMeta,
                loading: laundryPackagesIsLoading,
                onFetch: (payload) => dispatch(fetchLaundryPackagesStart(payload)),
            };
            break;
        case PAGE_TYPE.PAYMENT_TYPE:
            retval = {
                data: paymentTypesData,
                meta: paymentTypesMeta,
                loading: paymentTypesIsLoading,
                onFetch: (payload) => dispatch(fetchPaymentTypesStart(payload)),
            };
            break;
        default:
        // do nothing
    }

    return retval;
}

export const useBusinessLogic = ({ ref }) => {
    const location = useLocation();
    const keyword = handleGetKeyword({ location });
    const { onOpenFormDialog, pageUtility, pageType, onShowNotification } = useContext(PageContext);
    const listData = useListData(pageType);

    return {
        listData,
        keyword,
        onOpenFormDialog,
        pageUtility,
        pageType,
        onShowNotification,
    }
}