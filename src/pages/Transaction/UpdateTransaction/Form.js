import { useContext } from "react";
import { useForm } from "react-hook-form";
import InformationData from "./InformationData";
import StatusManagement from "./StatusManagement";
import OrderDetail from "./OrderDetail";
import { ComponentContext } from "./Context";
import Button from '../../../components/StyledButton';

export default ({ onSave, onCancel }) => {
    const { readOnly } = useContext(ComponentContext);
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => { onSave(data); };

    return (
        <form className="flex flex-col gap-4 mt-1" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                    <InformationData />
                </div>
                <div className="md:w-1/2">
                    <StatusManagement {...{ control }} />
                </div>
            </div>
            <div className="overflow-x-auto">
                <OrderDetail />
            </div>
            <div className="flex flex-row text-sm mt-1 mb-2">
                {!readOnly ? (
                    <div className="w-full flex justify-end gap-3">
                        <Button type="button" onClick={onCancel}>Batal</Button>
                        <Button type="submit" variant="primary">Simpan</Button>
                    </div>
                ) : (
                    <div className="w-full flex justify-end">
                        <Button type="button" onClick={onCancel}>Kembali ke Daftar Transaksi</Button>
                    </div>
                )}
            </div>
        </form>
    )
}