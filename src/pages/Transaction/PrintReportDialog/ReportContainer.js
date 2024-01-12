import React, { useContext } from "react";
import { currency, reformatDateTimeAsText } from "../../../utils";
import { createOrderStatusText } from "../utils";
import { ComponentContext } from "../../../mainlayout/Context";
import DialogContext from "./DialogContext";

const ReportContainer = () => {
  const { reportData: data } = useContext(DialogContext);
  const { companyProfile } = useContext(ComponentContext);

  if (!companyProfile) return null;

  return (
    <div id="report-container-id" className="hidden">
      <h2 style={{ textAlign: "center" }}>{`LAPORAN TRANSAKSI - ${companyProfile.name}`}</h2>
      <div style={{ textAlign: "center" }}>
        <p>{companyProfile.addr}</p>
        <p>{`Telepon : ${companyProfile.phone} | Email : ${companyProfile.email}`}</p>
      </div>
      <hr style={{ borderStyle: "solid", marginBottom: "15px" }} />
      <table>
        <thead>
          <tr>
            <th>Tgl. Transaksi</th>
            <th>No. Order</th>
            <th>Customer</th>
            <th>Paket</th>
            <th>Berat</th>
            <th>Harga / Kg</th>
            <th>Status Order</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map(x => (
            <tr key={x.id}>
              <td>{reformatDateTimeAsText(x.created_at)}</td>
              <td>{x.sales_number}</td>
              <td>{x.customer_name}</td>
              <td>{x.laundry_package_name}</td>
              <td>{`${Number(x.weight)} Kg`}</td>
              <td>{currency(x.laundry_package_price)}</td>
              <td>{createOrderStatusText(x.order_status)}</td>
              <td>{currency(x.total)}</td>
            </tr>
          ))}
          {data.length === 0 ? <tr><td colSpan="8">Data transaksi masih kosong.</td></tr> : null}
        </tbody>
      </table>
    </div>
  );
};

export default ReportContainer;
