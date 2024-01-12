import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required("Mohon untuk mengisi paket laundry"),
    price: yup.string().required("Mohon untuk mengisi harga"),
});

export default schema;