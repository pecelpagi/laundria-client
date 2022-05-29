import { currency, reformatDateAsText, reformatDateTimeAsText } from "../../../utils";
import { ComponentContext } from "../../../mainlayout/Context";

const notes = [
  "Pengambilan cucian harus membawa nota",
  "Cucian Luntur bukan tanggung jawab kami",
  "Hitung dan periksa sebelum pergi",
  "Klaim kekurangan/kehilangan cucian setelah meninggalkan laundri tidak dilayani",
  "Cucian yang rusak/mengkerut karena sifat kain tidak dapat kami ganti",
  "Cucian yang tidak diambil lebih dari 1 bulan bukan tanggung jawab kami",
  "Maximal penggantian 10x dari total invoice dan barang menjadi milik kami",
];

const InvoiceContainer = ({ data, companyProfile }) => {
  if (!companyProfile) return null;

  return (
    <div id="invoice-container-id" className="hidden">
      <table>
        <tbody>
          <tr>
            <td>
              <h2>{companyProfile.name}</h2>
              <p>{companyProfile.addr}</p>
              <p>{`Telepon: ${companyProfile.phone}`}</p>
              <p>{`Email: ${companyProfile.email}`}</p>
            </td>
            <td style={{ textAlign: "right" }}>
              <h2><b>Invoice</b></h2>
            </td>
          </tr>
        </tbody>
      </table>
      <hr style={{ borderStyle: "solid", marginBottom: "15px", marginTop: "15px" }} />
      <table>
        <tbody>
          <tr>
            <td style={{ width: "50%" }}>
              <div className="customer-info">
                <div><b>Customer:</b></div>
                <div>{data.customer_name}</div>
                <div>{data.addr}</div>
                <div>{data.phone}</div>
              </div>
            </td>
            <td>
              <table className="invoice-info" style={{ textAlign: "right" }}>
                <tbody>
                  <tr>
                    <td>No. Order : </td>
                    <td style={{ width: "195px", textAlign: "left" }}>{data.sales_number}</td>
                  </tr>
                  <tr>
                    <td>Tgl. Transaksi : </td>
                    <td style={{ width: "195px", textAlign: "left" }}>{reformatDateTimeAsText(data.created_at)}</td>
                  </tr>
                  <tr>
                    <td>Tgl. Ambil : </td>
                    <td style={{ width: "195px", textAlign: "left" }}>{reformatDateAsText(data.pickup_date)}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="bordered">
        <thead>
          <tr>
            <th>Paket Laundry</th>
            <th>Berat / Kg</th>
            <th>Harga</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.laundry_package_name}</td>
            <td>{`${Number(data.weight)} Kg`}</td>
            <td>{currency(data.laundry_package_price)}</td>
            <td>{currency(data.total)}</td>
          </tr>
          <tr>
            <td colSpan={3} style={{ textAlign: "right" }}><b>Total</b></td>
            <td>{currency(data.total)}</td>
          </tr>
        </tbody>
      </table>
      <div className="invoice-note">
        <p><b>Keterangan:</b></p>
        <ol>
          {notes.map((x, i) => (<li key={i}>{x}</li>))}
        </ol>
      </div>
    </div>
  );
};

const withContext = props => (
  <ComponentContext.Consumer>
    {contextData => (
      <InvoiceContainer {...props} {...contextData} />
    )}
  </ComponentContext.Consumer>
);

export default withContext;
