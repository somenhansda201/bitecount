import { useEffect, useState } from "react";
import { getHealthReport } from "../services/healthReportService";

export default function useHealthReport() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReport();
  }, []);

  async function loadReport() {
    try {
      const data = await getHealthReport();
      setReport(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    report,
    loading,
    refresh: loadReport,
  };
}