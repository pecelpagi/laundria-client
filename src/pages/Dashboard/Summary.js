import React from "react";
import {
    PersonIcon, BackpackIcon, OpenInNewWindowIcon, ArchiveIcon
} from '@radix-ui/react-icons';
import Card from "./SummaryCard";
import * as apiService from "../../data";
import SummarySkeleton from "./SummarySkeleton";

class Summary extends React.Component {
    state = {
        summaryData: null,
    }

    componentDidMount = () => {
        this.handleFetchData();
    }

    handleFetchData = async () => {
        try {
            const res = await apiService.getDashboardSummary();

            this.setState({ summaryData: res.data });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        const { summaryData } = this.state;

        if (!summaryData) return <div className="mt-3"><SummarySkeleton /></div>;

        return (
            <div className="flex flex-col gap-3 mt-3">
                <div className="w-full flex gap-3">
                    <div className="w-1/2">
                        <Card icon={(iconProps) => <PersonIcon {...iconProps} />} label="Customer" amount={summaryData.total_data_customer} />
                    </div>
                    <div className="w-1/2">
                        <Card icon={(iconProps) => <BackpackIcon {...iconProps} />} label="Karyawan" amount={summaryData.total_data_employee} />
                    </div>
                </div>
                <div className="w-full flex gap-3">
                    <div className="w-1/2">
                        <Card icon={(iconProps) => <OpenInNewWindowIcon {...iconProps} />} label="Order Baru" amount={summaryData.total_data_new_orders} />
                    </div>
                    <div className="w-1/2">
                        <Card icon={(iconProps) => <ArchiveIcon {...iconProps} />} label="Total Order" amount={summaryData.total_data_orders} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;
