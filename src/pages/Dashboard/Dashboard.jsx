import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import HeroCard from "../../components/Dashboard/HeroCard";
import StatsGrid from "../../components/Dashboard/StatsGrid";
import WeeklyCalories from "../../components/Dashboard/WeeklyCalories";
import AnalyticsRow from "../../components/Dashboard/AnalyticsRow";
import InsightsRow from "../../components/Dashboard/InsightsRow";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />

        <div className="dashboard-content">
          <HeroCard />

          <StatsGrid />

          <AnalyticsRow />

          <InsightsRow />

          {/* AI */}
        </div>
      </main>
    </div>
  );
}
