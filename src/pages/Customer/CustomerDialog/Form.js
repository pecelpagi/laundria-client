import { useForm } from "react-hook-form";
import ErrorText from "../../../components/ErrorText";
import InputText from '../../../components/InputText';
import Button from '../../../components/StyledButton';

export default ({ onClose, onSave }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => { onSave(data); };

    const disabled = (Object.keys(errors).length > 0);

    return (
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputText
                    label="Nama Lengkap"
                    name="fullname"
                    required
                    {...{ register }}
                />
                {errors.fullname && <ErrorText>Mohon untuk mengisi nama lengkap</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Alamat"
                    name="addr"
                    required
                    {...{ register }}
                />
                {errors.addr && <ErrorText>Mohon untuk mengisi alamat</ErrorText>}
            </div>
            <div>
                <InputText
                    label="No. Telepon"
                    name="phone"
                    required
                    {...{ register }}
                />
                {errors.phone && <ErrorText>Mohon untuk mengisi nomor telepon</ErrorText>}
            </div>
            <div className="flex flex-row text-sm mt-1 justify-end gap-3">
                <Button type="button" onClick={onClose}>Batal</Button>
                <Button type="submit" variant="primary" disabled={disabled}>Simpan</Button>
            </div>
        </form>
    );
}