import ErrorText from "../../components/ErrorText";
import InputText from '../../components/V2InputText';
import { useBusinessLogic } from "./form.hooks";

const Form = () => {
    const {
        errors,
        formData,
        onChangeValue,
        onSubmit,
    } = useBusinessLogic();

    return (
        <form id="identity-form" className="flex flex-col gap-4 mt-1" onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                    <InputText
                        label="Nama Lengkap"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => { onChangeValue('name', e.target.value); }}
                    />
                    {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                </div>
                <div className="md:w-1/3">
                    <InputText
                        label="Email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => { onChangeValue('email', e.target.value); }}
                    />
                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                </div>
                <div className="md:w-1/3">
                    <InputText
                        label="No. Telepon"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => { onChangeValue('phone', e.target.value); }}
                    />
                    {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
                </div>
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
        </form>
    );
}

export default Form;