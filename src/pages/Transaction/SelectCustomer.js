import React from "react";
import Select, { SELECT_TYPE } from '../../components/Select';
import { handleFetchDataList } from '../CustomerV2/utils';

class SelectCustomer extends React.Component {
    handleFetchData = async (search = '') => {
        const payload = {
            limit: 10,
            page: 1,
            search,
        }
        
        const res = await handleFetchDataList(payload);
        const reformatData = res.data.map((x) => ({ ...x, label: x.fullname, value: x.id }));

        return reformatData;
    }

    render() {
        const { control, value } = this.props;

        return (
            <Select
                label="Customer"
                name="customerId"
                selectType={SELECT_TYPE.ASYNC}
                onFetch={this.handleFetchData}
                required
                {...{ control, value }}
            />
        );
    }
}

export default SelectCustomer;
