import { Download } from "lucide-react";
import { downloadHealthReport } from "../../services/healthReportService";
import "./DownloadReportButton.css";

export default function DownloadReportButton() {

  async function handleDownload() {

    try {

      const pdfBlob = await downloadHealthReport();

      const url = window.URL.createObjectURL(pdfBlob);

      const link = document.createElement("a");

      link.href = url;

      link.download = "Health_Report.pdf";

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

    } catch (error) {

      console.error("Failed to download report:", error);

      alert("Unable to download report.");

    }

  }

  return (

    <button
      className="download-report-btn"
      onClick={handleDownload}
    >

      <Download size={18} />

      <span>Download PDF Report</span>

    </button>

  );

}