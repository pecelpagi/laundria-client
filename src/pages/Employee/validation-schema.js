import * as yup from 'yup';
import { validateEmail } from "../../utils";

const schema = yup.object({
    fullname: yup.string().required("Mohon untuk mengisi nama lengkap"),
    username: yup.string().required("Mohon untuk mengisi username"),
    addr: yup.string().required("Mohon untuk mengisi alamat"),
    email: yup.string().test(
        "isEmailValid",
        "Format email masih tidak sesuai",
        (v) => v ? validateEmail(v) : true,
    ).required("Mohon untuk mengisi email"),
    phone: yup.string().required("Mohon untuk mengisi nomor telepon"),
});

export default schema;