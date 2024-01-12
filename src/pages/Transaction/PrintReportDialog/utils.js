import moment from "moment";
import { reformatDateAsText } from "../../../utils";

export const createFormData = () => ({
  startDate: moment().subtract(1, 'days').toDate(),
  endDate: moment().toDate(),
});

export const dateValidator = (val) => moment(val, 'YYYY-MM-DD', true).isValid();

export const handlePrintDocument = (state) => {
  const { startDate: rawStartDate, endDate: rawEndDate } = state;

  const startDate = moment(rawStartDate).format("YYYY-MM-DD");
  const endDate = moment(rawEndDate).format("YYYY-MM-DD");

  const divContents = document.getElementById("report-container-id").innerHTML;
  const a = window.open("", "", `width=${window.screen.availWidth}, height=${window.screen.availHeight}`);
  a.document.write("<html>");
  a.document.write(`
        <head>
        <title>Periode Laporan - ${reformatDateAsText(startDate)} - ${reformatDateAsText(endDate)}</title>
        <style>
            @media print {
                @page { margin: 20px 0 20px 0; }
            }
            body {
                font-family: monospace;
                padding: 0px 15px;
            }
            table, td, th {
              border: 1px solid;
              text-align: left;
            }
            
            table {
              width: 100%;
              border-collapse: collapse;
            }

            td, th {
              padding: 10px;
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