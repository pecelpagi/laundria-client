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
            <div className="flex gap-3">
                <div className="w-2/5">
                    <CompanyProfile />
                </div>
                <div className="w-3/5">
                    <NewTransactionList {...this.props} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
