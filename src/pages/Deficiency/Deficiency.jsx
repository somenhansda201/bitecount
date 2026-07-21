import { useEffect, useState } from "react";

import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

import Header from "../../components/Deficiency/Header";
import AlertBanner from "../../components/Deficiency/AlertBanner";
import DeficiencyGrid from "../../components/Deficiency/DeficiencyGrid";
import Recommendations from "../../components/Deficiency/Recommendations";

import { getDeficiencyAnalysis } from "../../api/deficiency";

import "./Deficiency.css";

export default function Deficiency() {

  const [data, setData] = useState(null);

  const loadDeficiency = async () => {
    try {

      const response = await getDeficiencyAnalysis();

      console.log(response);

      setData(response);

    } catch (error) {

      console.error(
        "Failed to load deficiency analysis:",
        error
      );

    }
  };

  useEffect(() => {
    loadDeficiency();
  }, []);

  if (!data) {
    return (
      <div className="dashboard">

        <Sidebar />

        <main className="dashboard-main">

          <Topbar />

          <div className="dashboard-content">

            <p>Loading deficiency analysis...</p>

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

          <Header />

          <AlertBanner
            deficiencies={data.alert.count}
            message={data.alert.message}
          />

          <DeficiencyGrid
            deficiencies={data.deficiencies}
          />

          <Recommendations
            recommendations={data.recommendations}
          />

        </div>

      </main>

    </div>
  );
}