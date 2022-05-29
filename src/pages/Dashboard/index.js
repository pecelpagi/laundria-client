import React from 'react';
import CompanyProfile from "./CompanyProfile";
import NewTransactionList from './NewTransactionList';

class Dashboard extends React.Component {
    componentDidMount = () => {
        const { onAssignButtons, onAssignBreadcrumbs } = this.props;

        onAssignButtons([]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            "Dashboard",
        ]);
    }

    render() {
        return (
            <div className="flex flex-col gap-3">
                <div className="w-full">
                    <CompanyProfile />
                </div>
                <div className="w-full">
                    <NewTransactionList {...this.props} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
