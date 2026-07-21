import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

import NotificationsCard from "../../components/settings/notificationscard";

import "./Settings.css";

export default function Settings() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />

        <div className="settings-page">
          <h1 className="settings-title">Settings</h1>

          <NotificationsCard />
        </div>
      </div>
    </div>
  );
}
