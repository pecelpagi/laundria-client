import React from "react";
import Select, { SELECT_TYPE } from '../../../components/V2Select';
import * as apiServiceUtility from './api-service.utils';

const SelectPaymentType = ({ onChange, value }) => {
    return (
        <Select
            label="Tipe Pembayaran"
            name="paymentTypeId"
            selectType={SELECT_TYPE.ASYNC}
            onFetch={apiServiceUtility.handleFetchPaymentTypes}
            required
            {...{ value, onChange }}
        />
    );
}

export default SelectPaymentType;
