import { useForm } from "react-hook-form";
import ErrorText from "../../components/ErrorText";
import InputText from '../../components/InputText';
import Button from '../../components/StyledButton';

export default ({ onSave, formData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => { onSave({ id: formData.id, ...data }); };

    const disabled = (Object.keys(errors).length > 0);

    return (
        <form className="flex flex-col gap-4 mt-1" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                    <InputText
                        label="Nama Lengkap"
                        name="name"
                        required
                        defaultValue={formData.name}
                        {...{ register }}
                    />
                    {errors.name && <ErrorText>Mohon untuk mengisi nama lengkap</ErrorText>}
                </div>
                <div className="md:w-1/3">
                    <InputText
                        label="Email"
                        name="email"
                        required
                        defaultValue={formData.email}
                        {...{ register }}
                    />
                    {errors.email && <ErrorText>Mohon untuk mengisi email</ErrorText>}
                </div>
                <div className="md:w-1/3">
                    <InputText
                        label="No. Telepon"
                        name="phone"
                        required
                        defaultValue={formData.phone}
                        {...{ register }}
                    />
                    {errors.phone && <ErrorText>Mohon untuk mengisi nomor telepon</ErrorText>}
                </div>
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
            <div className="flex flex-row text-sm mt-1 mb-2">
                <div className="w-full flex justify-end gap-3">
                    <Button type="submit" variant="primary" disabled={disabled}>Simpan</Button>
                </div>
            </div>
        </form>
    );
}