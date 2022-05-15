import { useForm } from "react-hook-form";
import {
    TrashIcon,
} from '@radix-ui/react-icons';
import ErrorText from "../../components/ErrorText";
import InputText from '../../components/InputText';
import Button from '../../components/StyledButton';

export default ({ onClose, onSave, formData, onShowConfirmationDialog, onHideFormDialog }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => { onSave({ id: formData.id, ...data }); };

    const handleShowDeleteConfirmation = () => {
        onHideFormDialog();
        onShowConfirmationDialog();
    }

    const disabled = (Object.keys(errors).length > 0);

    return (
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputText
                    label="Tipe Pembayaran"
                    name="name"
                    required
                    defaultValue={formData.name}
                    {...{ register }}
                />
                {errors.name && <ErrorText>Mohon untuk mengisi tipe pembayaran</ErrorText>}
            </div>
            <div className="flex flex-row text-sm mt-1">
                <div className="w-1/2">
                    {formData.id ? (
                        <Button
                            type="button"
                            variant="danger"
                            onClick={handleShowDeleteConfirmation}
                        >
                            <span className="flex flex-row"><TrashIcon />&nbsp;Hapus</span>
                        </Button>
                    ) : null}
                </div>
                <div className="w-1/2 flex justify-end gap-3">
                    <Button type="button" onClick={onClose}>Batal</Button>
                    <Button type="submit" variant="primary" disabled={disabled}>Simpan</Button>
                </div>
            </div>
        </form>
    );
}