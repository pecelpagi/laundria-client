import ErrorText from "../../components/ErrorText";
import InputText from '../../components/InputText';
import { useBusinessLogic } from "./form.hooks";

const Form = () => {
    const {
        errors,
        formData,
        onChangeValue,
        onSubmit,
    } = useBusinessLogic();

    return (
        <form id="my-profile-form" className="flex flex-col gap-4 mt-1" onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                    <InputText
                        label="Nama Lengkap"
                        name="fullname"
                        required
                        value={formData.fullname}
                        onChange={(e) => { onChangeValue('fullname', e.target.value); }}
                    />
                    {errors.fullname && <ErrorText>{errors.fullname.message}</ErrorText>}
                </div>
                <div className="md:w-1/2">
                    <InputText
                        label="Username"
                        name="username"
                        required
                        value={formData.username}
                        onChange={(e) => { onChangeValue('username', e.target.value); }}
                    />
                    {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
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
            <div className="flex  flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                    <InputText
                        label="Email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => { onChangeValue('email', e.target.value); }}
                    />
                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                </div>
                <div className="md:w-1/2">
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
        </form>
    );
}

export default Form;