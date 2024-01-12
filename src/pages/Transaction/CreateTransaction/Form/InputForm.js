import React, { useContext } from "react";
import ErrorText from "../../../../components/ErrorText";
import InputText from '../../../../components/V2InputText';
import BrowseCustomer from "../../BrowseCustomer";
import SelectPaymentType from "../../components/SelectPaymentType";
import SelectLaundryPackage from "../../components/SelectLaundryPackage";
import Select from '../../../../components/V2Select';
import { createStaticDataPaymentStatus } from '../../utils';
import { replaceAllExceptNumerics } from "../../../../utils";
import PageContext from "../PageContext";
import FormContext from "./FormContext";

const paymentStatusOptions = createStaticDataPaymentStatus();

const InputForm = () => {
    const { formData } = useContext(PageContext);
    const { errors, onChange } = useContext(FormContext);

    return (
        <React.Fragment>
            <div className="w-full">
                <BrowseCustomer
                    selectedData={formData.customer}
                    onChange={(val) => { onChange('customer', val); }}
                />
                {(errors.customer && errors.customer.id) && <ErrorText>{errors.customer.id.message}</ErrorText>}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-1/2">
                    <InputText
                        label="No. Order"
                        name="salesNumber"
                        required
                        value={formData.salesNumber}
                        onChange={(e) => { onChange('salesNumber', e.target.value); }}
                    />
                    {errors.salesNumber && <ErrorText>{errors.salesNumber.message}</ErrorText>}
                </div>
                <div className="sm:w-1/2">
                    <InputText
                        label="Telepon"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => { onChange('phone', e.target.value); }}
                    />
                    {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
                </div>
            </div>
            <div className="w-full">
                <InputText
                    label="Alamat Lengkap"
                    name="addr"
                    required
                    value={formData.addr}
                    onChange={(e) => { onChange('addr', e.target.value); }}
                />
                {errors.addr && <ErrorText>{errors.addr.message}</ErrorText>}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-1/3">
                    <InputText
                        label="Tanggal Ambil"
                        name="pickupDate"
                        required
                        value={formData.pickupDate}
                        onChange={(e) => { onChange('pickupDate', e.target.value); }}
                    />
                    {errors.pickupDate && <ErrorText>{errors.pickupDate.message}</ErrorText>}
                </div>
                <div className="sm:w-1/3">
                    <SelectPaymentType
                        onChange={(val) => { onChange('paymentTypeId', val); }}
                        value={formData.paymentTypeId}
                    />
                    {errors.paymentTypeId && <ErrorText>{errors.paymentTypeId.message}</ErrorText>}
                </div>
                <div className="sm:w-1/3">
                    <Select
                        label="Status Pembayaran"
                        name="paymentStatus"
                        onChange={(val) => { onChange('paymentStatus', val); }}
                        options={paymentStatusOptions}
                        value={formData.paymentStatus}
                        required
                    />
                    {errors.paymentStatus && <ErrorText>{errors.paymentStatus.message}</ErrorText>}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-1/2">
                    <SelectLaundryPackage
                        onChange={(val) => { onChange('laundryPackageId', val); }}
                        value={formData.laundryPackageId}
                    />
                    {errors.laundryPackageId && <ErrorText>{errors.laundryPackageId.message}</ErrorText>}
                </div>
                <div className="sm:w-1/2">
                    <InputText
                        label="Berat (kg)"
                        name="weight"
                        required
                        value={formData.weight}
                        onChange={(e) => { onChange('weight', replaceAllExceptNumerics(e.target.value)); }}
                    />
                    {errors.weight && <ErrorText>{errors.weight.message}</ErrorText>}
                </div>
            </div>
        </React.Fragment>
    );
}

export default InputForm;