import * as yup from 'yup';

const schema = yup.object({
    customer: yup.object({
        id: yup.string().required("Mohon untuk memilih customer"),
    }),
    salesNumber: yup.string().required("Mohon untuk mengisi nomor order"),
    phone: yup.string().required("Mohon untuk mengisi nomor telepon"),
    addr: yup.string().required("Mohon untuk mengisi alamat lengkap"),
    pickupDate: yup.string().required("Mohon untuk memilih tanggal ambil"),
    paymentTypeId: yup.string().required("Mohon untuk memilih tipe pembayaran"),
    paymentStatus: yup.string().required("Mohon untuk memilih status pembayaran"),
    laundryPackageId: yup.string().required("Mohon untuk memilih paket laundry"),
    weight: yup.string().required("Mohon untuk mengisi berat (kg)"),
});

export default schema;