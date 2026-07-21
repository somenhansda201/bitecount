import { useEffect, useState } from "react";

import { getDashboard } from "../services/dashboardService";

export default function useDashboard() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const data = await getDashboard();

      setDashboard(data);

      setError(null);
    } catch (err) {
      console.error(err);

      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return {
    dashboard,
    loading,
    error,
    refreshDashboard: loadDashboard,
  };
}