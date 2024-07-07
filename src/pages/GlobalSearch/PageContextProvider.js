import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import PageContext from './PageContext';
import Box from '../../components/Box';
import Breadcrumb from '../../mainlayout/Breadcrumb';
import * as apiServiceUtility from './api-service.utils';

const breadcrumbs = [
    {
        label: "App", link: "#",
    },
    "Pencarian",
];

class ClassComponent extends React.Component {
    state = {
        laundryTransactions: [],
        customers: [],
        customerDetailData: null,
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleAssignButtonsAndBreadcrumbs();
        this.initialFetching();
    }

    handleAssignButtonsAndBreadcrumbs = () => {
        const { onAssignButtons, onAssignBreadcrumbs } = this.props;

        onAssignButtons([]);
        onAssignBreadcrumbs([]);
    }

    initialFetching = () => {
        const keyword = this.handleGetKeyword();

        apiServiceUtility.handleFetchLaundryTransactions({ search: keyword, setState: this.setState });
        apiServiceUtility.handleFetchCustomers({ search: keyword, setState: this.setState });
    }

    handleGetKeyword = () => {
        const { location } = this.props;
        const parsed = queryString.parse(location.search);

        if (!('q' in parsed)) return '';

        const keyword = parsed.q;

        return keyword;
    }

    handleOpenCustomerDetailDialog = (data = null) => {
        const { refCollections } = this.props;

        this.setState({ customerDetailData: data }, () => {
            refCollections.customerDetailDialog.current.handleShowDialog();
        });
    }

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onOpenCustomerDetailDialog: this.handleOpenCustomerDetailDialog,
    });

    render() {
        const { laundryTransactions, customers } = this.state;
        const { children } = this.props;
        const keyword = this.handleGetKeyword();

        const contextValue = { ...this.createContextValue(), keyword };

        const resultCount = laundryTransactions.length + customers.length;

        return (
            <PageContext.Provider value={contextValue}>
                <Box
                    css={{
                        background: '$backgroundSecondary'
                    }}
                    className="flex flex-col md:flex-row items-center mb-4 p-3 pl-5 rounded"
                >
                    <div className="w-full md:w-1/2">
                        <Breadcrumb data={breadcrumbs} />
                    </div>
                    <Box className="w-full md:w-1/2 text-right text-sm">
                        Menampilkan {resultCount} data untuk <strong>"{keyword}"</strong>
                    </Box>
                </Box>
                {children}
            </PageContext.Provider>
        )
    }
}

const PageContextProvider = (props) => {
    const location = useLocation();

    return <ClassComponent {...props} {...{ location }} />
};

export default PageContextProvider;