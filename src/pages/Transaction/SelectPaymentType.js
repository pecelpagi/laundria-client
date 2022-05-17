import React from "react";
import Select, { SELECT_TYPE } from '../../components/Select';
import { handleFetchDataList } from '../PaymentType/utils';

class SelectPaymentType extends React.Component {
    handleFetchData = async (search = '') => {
        const payload = {
            limit: 10,
            page: 1,
            search,
        }
        
        const res = await handleFetchDataList(payload);
        const reformatData = res.data.map((x) => ({ ...x, label: x.name, value: x.id }));

        return reformatData;
    }

    render() {
        const { control, value } = this.props;

        return (
            <Select
                label="Tipe Pembayaran"
                name="paymentTypeId"
                selectType={SELECT_TYPE.ASYNC}
                onFetch={this.handleFetchData}
                required
                {...{ control, value }}
            />
        );
    }
}

export default SelectPaymentType;
