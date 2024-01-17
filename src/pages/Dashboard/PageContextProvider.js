import React, { Component } from 'react'
import PageContext from './PageContext';
import * as apiServiceUtility from './api-service.utils';

class PageContextProvider extends Component {
    state = {
        laundryTransactions: null,
        summary: null,
        dailyTransactionTotal: null,
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleAssignButtonsAndBreadcrumbs();
        this.initialFetching();
    }

    handleAssignButtonsAndBreadcrumbs = () => {
        const { onAssignButtons, onAssignBreadcrumbs, history } = this.props;

        onAssignButtons([{
            id: "1", title: "Customer", clickEvent: () => { history.push('/customer'); }, variant: "white"
        }, {
            id: "2", title: "Paket Laundry", clickEvent: () => { history.push('/laundry-package') }, variant: "white"
        }, {
            id: "3", title: "Tipe Pembayaran", clickEvent: () => { history.push('/payment-type') }, variant: "white"
        }]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            "Dashboard",
        ]);
    }

    initialFetching = () => {
        apiServiceUtility.handleFetchLaundryTransactions({ setState: this.setState });
        apiServiceUtility.handleFetchSummary({ setState: this.setState });
        apiServiceUtility.handleFetchDailyTransactionTotal({ setState: this.setState });
    }

    createContextValue = () => {
        return {
            ...this.props,
            ...this.state,
        }
    }

    render() {
        const { children } = this.props;

        const contextValue = this.createContextValue();

        return (
            <PageContext.Provider value={contextValue}>
                {children}
            </PageContext.Provider>
        )
    }
}

export default PageContextProvider;