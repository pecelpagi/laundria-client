import { useForm } from "react-hook-form";
import ErrorText from "../../../components/ErrorText";
import InputText from '../../../components/InputText';
import Button from '../../../components/StyledButton';
import SelectCustomer from "../SelectCustomer";
import SelectPaymentType from "../SelectPaymentType";
import SelectLaundryPackage from "../SelectLaundryPackage";
import Select from '../../../components/Select';
import { createStaticDataPaymentStatus } from '../utils';
import { replaceAllExceptNumerics } from "../../../utils";

export default ({ onSave, formData, onCancel }) => {
    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm();
    const onSubmit = (data) => { onSave(data); };

    const disabled = (Object.keys(errors).length > 0);

    return (
        <form className="flex flex-col gap-4 mt-1" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-4">
                <div className="w-1/3">
                    <InputText
                        label="No. Order"
                        name="salesNumber"
                        required
                        defaultValue={formData.salesNumber}
                        {...{ register }}
                    />
                    {errors.salesNumber && <ErrorText>Mohon untuk mengisi nomor order</ErrorText>}
                </div>
                <div className="w-1/3">
                    <SelectCustomer
                        {...{ control }}
                        value={formData.customerId}
                    />
                    {errors.customerId && <ErrorText>Mohon untuk memilih customer</ErrorText>}
                </div>
                <div className="w-1/3">
                    <InputText
                        label="Telepon"
                        name="phone"
                        required
                        defaultValue={formData.phone}
                        {...{ register }}
                    />
                    {errors.phone && <ErrorText>Mohon untuk mengisi nomor telepon</ErrorText>}
                </div>
            </div>
            <div className="w-full">
                <InputText
                    label="Alamat Lengkap"
                    name="addr"
                    required
                    defaultValue={formData.addr}
                    {...{ register }}
                />
                {errors.addr && <ErrorText>Mohon untuk mengisi alamat lengkap</ErrorText>}
            </div>
            <div className="flex flex-row gap-4">
                <div className="w-1/3">
                    <InputText
                        label="Tanggal Ambil"
                        name="pickupDate"
                        required
                        defaultValue={formData.pickupDate}
                        {...{ register }}
                    />
                    {errors.pickupDate && <ErrorText>Mohon untuk memilih tanggal ambil</ErrorText>}
                </div>
                <div className="w-1/3">
                    <SelectPaymentType
                        {...{ control }}
                        value={formData.paymentTypeId}
                    />
                    {errors.paymentTypeId && <ErrorText>Mohon untuk memilih tipe pembayaran</ErrorText>}
                </div>
                <div className="w-1/3">
                    <Select
                        label="Status Pembayaran"
                        name="paymentStatus"
                        {...{ control }}
                        required
                        options={createStaticDataPaymentStatus()}
                        value={formData.paymentStatus}
                    />
                    {errors.paymentStatus && <ErrorText>Mohon untuk memilih status pembayaran</ErrorText>}
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <div className="w-1/2">
                    <SelectLaundryPackage
                        {...{ control }}
                        value={formData.laundryPackageId}
                    />
                    {errors.laundryPackageId && <ErrorText>Mohon untuk memilih paket laundry</ErrorText>}
                </div>
                <div className="w-1/2">
                    <InputText
                        label="Berat (kg)"
                        name="weight"
                        required
                        defaultValue={formData.weight}
                        registerOptions={{ onChange: (e) => { setValue('weight', replaceAllExceptNumerics(e.target.value)); } }}
                        {...{ register }}
                    />
                    {errors.weight && <ErrorText>Mohon untuk mengisi berat (kg)</ErrorText>}
                </div>
            </div>
            <div className="flex flex-row text-sm mt-1 mb-2">
                <div className="w-full flex justify-end gap-3">
                    <Button type="button" onClick={onCancel}>Batal</Button>
                    <Button type="submit" variant="primary" disabled={disabled}>Simpan</Button>
                </div>
            </div>
        </form>
    );
}