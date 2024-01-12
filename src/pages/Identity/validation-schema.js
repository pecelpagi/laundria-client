import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required("Mohon untuk mengisi nama lengkap"),
    email: yup.string().required("Mohon untuk mengisi email"),
    phone: yup.string().required("Mohon untuk mengisi nomor telepon"),
    addr: yup.string().required("Mohon untuk mengisi alamat"),
});

export default schema;
