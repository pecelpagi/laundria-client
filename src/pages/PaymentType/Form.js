import {
    TrashIcon,
} from '@radix-ui/react-icons';
import ErrorText from "../../components/ErrorText";
import InputText from '../../components/InputText';
import Button from '../../components/StyledButton';
import { useBusinessLogic } from "./form.hooks";

const Form = ({ onClose, onSave, formData: formDataProp, onShowConfirmationDialog, onHideFormDialog }) => {
    const {
        formData,
        errors,
        hasErrors,
        onSubmit,
        onChangeValue,
        onShowDeleteConfirmation,
    } = useBusinessLogic({ formDataProp, onHideFormDialog, onShowConfirmationDialog, onSave });

    return (
        <form className="flex flex-col gap-4 mt-4" onSubmit={onSubmit}>
            <div>
                <InputText
                    label="Tipe Pembayaran"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => { onChangeValue('name', e.target.value); }}
                />
                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
            </div>
            <div className="flex flex-col sm:flex-row text-sm mt-1 gap-3">
                <div className="sm:w-1/2">
                    {formData.id ? (
                        <Button
                            className="w-full sm:w-auto"
                            type="button"
                            variant="danger"
                            onClick={onShowDeleteConfirmation}
                        >
                            <span className="flex flex-row justify-center"><TrashIcon />&nbsp;Hapus</span>
                        </Button>
                    ) : null}
                </div>
                <div className="sm:w-1/2 flex justify-between sm:justify-end gap-3">
                    <Button type="button" className="w-full sm:w-auto" onClick={onClose}>Batal</Button>
                    <Button type="submit" className="w-full sm:w-auto" variant="primary" disabled={hasErrors}>Simpan</Button>
                </div>
            </div>
        </form>
    );
}

export default Form;