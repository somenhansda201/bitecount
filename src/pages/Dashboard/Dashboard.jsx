import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import HeroCard from "../../components/Dashboard/HeroCard";
import StatsGrid from "../../components/Dashboard/StatsGrid";
import AnalyticsRow from "../../components/Dashboard/AnalyticsRow";
import InsightsRow from "../../components/Dashboard/InsightsRow";

import useDashboard from "../../hooks/useDashboard";

import "./Dashboard.css";

export default function Dashboard() {
  const { dashboard, loading, error } = useDashboard();

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />

        <div className="dashboard-content">
          {loading ? (
            <div className="dashboard-loading">
              Loading dashboard...
            </div>
          ) : error ? (
            <div className="dashboard-error">
              Failed to load dashboard.
            </div>
          ) : (
            <>
              <HeroCard hero={dashboard.hero} />

              <StatsGrid summary={dashboard.summary} />

              <AnalyticsRow
                weeklyCalories={dashboard.weekly_calories}
                macroDistribution={dashboard.macro_distribution}
              />

              <InsightsRow
                nutritionAlerts={dashboard?.nutrition_alerts || []}
                aiSuggestions={dashboard?.ai_suggestions || []}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}