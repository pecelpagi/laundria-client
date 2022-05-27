import { useForm } from "react-hook-form";
import {
    LockClosedIcon
} from '@radix-ui/react-icons';
import { Wrapper, Header } from './Login.styles';
import InputText from '../../components/InputText';
import InputPassword from '../../components/InputPassword';
import StyledButton from '../../components/StyledButton';
import { isHasProperty } from "../../utils";
import Spinner from "../../components/Spinner";

const createErrorMessage = (data, errorFromAPI = '') => {
    const errors = Object.keys(data);

    if (errorFromAPI) return errorFromAPI;

    if (errors.length === 0) return '';

    if (isHasProperty(data, 'username')) return 'Username masih kosong';
    if (isHasProperty(data, 'passwd')) return 'Password masih kosong';

    return '';
}

export default (props) => {
    const { onSubmit, errorFromAPI, isLoading } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();

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
                    <InputText defaultValue="admin" label="Username" name="username" placeholder="Masukkan Username" {...{ register }} required />
                </div>
                <div className="mb-2">
                    <InputPassword defaultValue="superadmin" label="Password" name="passwd" placeholder="Masukkan Password" {...{ register }} required />
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