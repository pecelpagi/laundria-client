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
                    label="Nama Lengkap"
                    name="fullname"
                    required
                    value={formData.fullname}
                    onChange={(e) => { onChangeValue('fullname', e.target.value); }}
                />
                {errors.fullname && <ErrorText>{errors.fullname.message}</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Alamat"
                    name="addr"
                    required
                    value={formData.addr}
                    onChange={(e) => { onChangeValue('addr', e.target.value); }}
                />
                {errors.addr && <ErrorText>{errors.addr.message}</ErrorText>}
            </div>
            <div>
                <InputText
                    label="No. Telepon"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => { onChangeValue('phone', e.target.value); }}
                />
                {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
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