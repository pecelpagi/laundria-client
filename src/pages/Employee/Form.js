import { useForm } from "react-hook-form";
import {
    TrashIcon,
} from '@radix-ui/react-icons';
import ErrorText from "../../components/ErrorText";
import InputText from '../../components/InputText';
import Button from '../../components/StyledButton';
import { validateEmail } from "../../utils";

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
                    label="Nama Lengkap"
                    name="fullname"
                    required
                    defaultValue={formData.fullname}
                    {...{ register }}
                />
                {errors.fullname && <ErrorText>Mohon untuk mengisi nama lengkap</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Username"
                    name="username"
                    required
                    defaultValue={formData.username}
                    {...{ register }}
                />
                {errors.username && <ErrorText>Mohon untuk mengisi username</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Alamat"
                    name="addr"
                    required
                    defaultValue={formData.addr}
                    {...{ register }}
                />
                {errors.addr && <ErrorText>Mohon untuk mengisi alamat</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Email"
                    name="email"
                    required
                    defaultValue={formData.email}
                    registerOptions={{
                        validate: { 
                            isEmailValid: (v) => validateEmail(v) 
                        }
                    }}
                    {...{ register }}
                />
                {(errors.email && errors.email.type === "required") && <ErrorText>Mohon untuk mengisi email</ErrorText>}
                {(errors.email && errors.email.type === "isEmailValid") && <ErrorText>Format email masih tidak sesuai</ErrorText>}
            </div>
            <div>
                <InputText
                    label="No. Telepon"
                    name="phone"
                    required
                    defaultValue={formData.phone}
                    {...{ register }}
                />
                {errors.phone && <ErrorText>Mohon untuk mengisi nomor telepon</ErrorText>}
            </div>
            <div className="flex flex-col sm:flex-row text-sm mt-1 gap-3">
                <div className="sm:w-1/2">
                    {formData.id ? (
                        <Button
                            className="w-full sm:w-auto"
                            type="button"
                            variant="danger"
                            onClick={handleShowDeleteConfirmation}
                        >
                            <span className="flex flex-row justify-center"><TrashIcon />&nbsp;Hapus</span>
                        </Button>
                    ) : null}
                </div>
                <div className="sm:w-1/2 flex justify-between sm:justify-end gap-3">
                    <Button type="button" className="w-full sm:w-auto" onClick={onClose}>Batal</Button>
                    <Button type="submit" className="w-full sm:w-auto" variant="primary" disabled={disabled}>Simpan</Button>
                </div>
            </div>
        </form>
    );
}