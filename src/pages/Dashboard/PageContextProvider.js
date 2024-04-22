import React, { Component } from 'react'
import PageContext from './PageContext';

class PageContextProvider extends Component {
    componentDidMount = () => {
        this.handleAssignButtonsAndBreadcrumbs();
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

    createContextValue = () => {
        return {
            ...this.props,
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