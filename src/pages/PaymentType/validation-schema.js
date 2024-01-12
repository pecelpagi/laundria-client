import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required("Mohon untuk mengisi tipe pembayaran"),
});

export default schema;