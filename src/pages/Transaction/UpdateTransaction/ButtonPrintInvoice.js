import React from "react";
import InvoiceContainer from "./InvoiceContainer";
import Button from '../../../components/StyledButton';

class ButtonPrintInvoice extends React.Component {
  handlePrintDocument = () => {
    const { data } = this.props;

    const divContents = document.getElementById("invoice-container-id").innerHTML;
    const a = window.open("", "", `width=${window.screen.availWidth}, height=${window.screen.availHeight}`);
    a.document.write("<html>");
    a.document.write(`
        <head>
        <title>Invoice - ${data.sales_number}</title>
        <style>
            @media print {
                @page { margin: 20px 0 20px 0; }
            }
            body {
                font-family: monospace;
                padding: 0px 15px;
            }
            table.bordered, table.bordered td, table.bordered th {
              border: 1px solid;
              text-align: left;
            }
            
            table {
              width: 100%;
              border-collapse: collapse;
            }

            table.bordered td, table.bordered th {
              padding: 10px;            
            }

            .invoice-info td, .invoice-info th {
              padding: 3px;
            }

            .customer-info div {
              margin-bottom: 8px;
            }
            
            table.bordered {
              margin-top: 12px;
            }

            .invoice-note {
              margin-top: 3em;
            }
            .invoice-note ol {
              padding-left: 25px;
            }
            .invoice-note ol li {
              margin-bottom: 8px;
            }
        </style>
        </head>
    `);
    a.document.write("<body>");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    a.print();
  }

  render() {
    const { data } = this.props;

    if (!data) return null;

    return (
      <React.Fragment>
        <Button type="button" variant="primary" onClick={this.handlePrintDocument}>Cetak Invoice</Button>
        <InvoiceContainer data={data} />
      </React.Fragment>
    );
  }
}

export default ButtonPrintInvoice;
