import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

import OverallHealthScore from "../../components/Reports/OverallHealthScore";
import ProfileSummary from "../../components/Reports/ProfileSummary";
import KeyDeficiencies from "../../components/Reports/KeyDeficiencies";
import Strengths from "../../components/Reports/Strengths";
import RecommendationCard from "../../components/Reports/RecommandationCard";
import DownloadReportButton from "../../components/Reports/DownloadReportButton";
import useHealthReport from "../../hooks/useHealthReport";

import "./Reports.css";

export default function Reports() {
  const {
  report,
  loading,
  refresh,
} = useHealthReport();
  if (loading) {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          Loading Health Report...
        </div>
      </main>
    </div>
  );
}


if (!report) {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          Failed to load Health Report.
        </div>
      </main>
    </div>
  );
}



  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />

        <div className="dashboard-content">
          <div className="reports-header">
            <div>
              <h1>Health Reports</h1>

              <p>Comprehensive health and nutrition analysis reports</p>
            </div>

            <DownloadReportButton />
          </div>

          <OverallHealthScore overallHealth={report.overall_health} />

          <div className="reports-grid">
            <ProfileSummary profile={report.profile} />

            <KeyDeficiencies deficiencies={report.key_deficiencies} />

            <Strengths strengths={report.strengths} />

            <RecommendationCard recommendations={report.recommendations} />
          </div>
        </div>
      </main>
    </div>
  );
}
