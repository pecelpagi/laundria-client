import { useForm, Controller } from "react-hook-form";
import {
    LockClosedIcon
} from '@radix-ui/react-icons';
import { Wrapper, Header } from './Login.styles';
import InputText from '../../components/V2InputText';
import InputPassword from '../../components/InputPassword';
import StyledButton from '../../components/StyledButton';
import { isHasProperty } from "../../utils";
import Spinner from "../../components/Spinner";

const createErrorMessage = (data, errorFromAPI = '') => {
    const errors = Object.keys(data);

    if (errorFromAPI) return errorFromAPI;

    if (errors.length === 0) return '';
    if (isHasProperty(data, 'username') && data.username && data.username.type === 'required') return 'Username masih kosong';
    if (isHasProperty(data, 'passwd') && data.passwd && data.passwd.type === 'required') return 'Password masih kosong';

    return '';
}

const Form = (props) => {
    const { onSubmit, errorFromAPI, isLoading } = props;
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            username: 'admin',
            passwd: 'superadmin'
        }
    });

    const errMessage = createErrorMessage(errors, errorFromAPI);
    const disabled = !errorFromAPI && String(errMessage).length > 0;

    return (
        <Wrapper className="rounded bg-white w-full max-w-xs sm:w-96 sm:max-w-none relative" onSubmit={handleSubmit(onSubmit)}>
            <Header className="p-3 rounded-t">
                <h4 className="font-medium mb-1">Selamat Datang di Laundria !</h4>
                <span className="text-xs">Silahkan masukkan username dan password Anda</span>
            </Header>
            <div className="p-4">
                <div className="mb-4">
                    <Controller
                        control={control}
                        name="username"
                        rules={{
                            required: true
                        }}
                        render={({ field: { value, onChange } }) => (
                            <InputText value={value} label="Username" name="username" placeholder="Masukkan Username" required {...{ onChange }} />
                        )}
                    />
                </div>
                <div className="mb-2">
                    <Controller
                        control={control}
                        name="passwd"
                        rules={{
                            required: true
                        }}
                        render={({ field: { value, onChange } }) => (
                            <InputPassword value={value} label="Password" name="passwd" placeholder="Masukkan Password" required {...{ onChange }} />
                        )}
                    />
                </div>
                {errMessage ? <span className="text-red-600 text-sm block">{errMessage}</span> : null}
                <StyledButton
                    className="w-full text-sm mt-3 disabled:opacity-75 p-0"
                    variant="primary"
                    type="submit"
                    disabled={disabled}
                >
                    <span
                        className={`flex items-center 
                        justify-center
                        ${disabled ? 'cursor-not-allowed' : ''}`}
                    >
                        <LockClosedIcon />&nbsp;Login
                    </span>
                </StyledButton>
            </div>
            {isLoading ? <Spinner /> : null}
        </Wrapper>
    )
};

export default Form;