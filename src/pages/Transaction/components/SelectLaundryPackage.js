import React from "react";
import Select, { SELECT_TYPE } from '../../../components/V2Select';
import * as apiServiceUtility from './api-service.utils';

const SelectLaundryPackage = ({ onChange, value }) => {
    return (
        <Select
            label="Paket Laundry"
            name="laundryPackageId"
            selectType={SELECT_TYPE.ASYNC}
            onFetch={apiServiceUtility.handleFetchLaundryPackages}
            required
            {...{ value, onChange }}
        />
    );
}

export default SelectLaundryPackage;
