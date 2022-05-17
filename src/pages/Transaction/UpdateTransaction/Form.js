import { useForm } from "react-hook-form";
import InformationData from "./InformationData";
import StatusManagement from "./StatusManagement";
import OrderDetail from "./OrderDetail";
import Button from '../../../components/StyledButton';

export default ({ onSave, onCancel }) => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => { onSave(data); };

    return (
        <form className="flex flex-col gap-4 mt-1" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-4">
                <div className="w-1/2">
                    <InformationData />
                </div>
                <div className="w-1/2">
                    <StatusManagement {...{ control }} />
                </div>
            </div>
            <div>
                <OrderDetail />
            </div>
            <div className="flex flex-row text-sm mt-1 mb-2">
                <div className="w-full flex justify-end gap-3">
                    <Button type="button" onClick={onCancel}>Batal</Button>
                    <Button type="submit" variant="primary">Simpan</Button>
                </div>
            </div>
        </form>
    )
}