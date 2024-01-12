import * as yup from 'yup';

const schema = yup.object({
    fullname: yup.string().required("Mohon untuk mengisi nama lengkap"),
    addr: yup.string().required("Mohon untuk mengisi alamat"),
    phone: yup.string().required("Mohon untuk mengisi nomor telepon")
});

export default schema;