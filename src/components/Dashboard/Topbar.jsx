import { Menu, Bell, Moon, HeartPulse } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../../services/profileService";
import UserMenu from "./UserMenu";

import "./Topbar.css";

export default function Topbar() {
  const location = useLocation();
  const { setSidebarOpen } = useSidebar();
  const pageTitles = {
    "/dashboard": "Dashboard",
    "/foodlog": "Food Log",
    "/nutrition": "Nutrition Analysis",
    "/deficiency": "Deficiency Detection",
    "/recommendation": "AI Recommendation",
    "/mealplanner": "Meal Planner",
    "/chat": "AI Assistant",
    "/reports": "Health Reports",
    "/profile": "Profile",
    "/settings": "Settings",
  };

  const title = pageTitles[location.pathname] || "Dashboard";

  const [healthScore, setHealthScore] = useState(0);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const profile = await getProfile();

      setHealthScore(profile.health_score);
    } catch (error) {
      console.error("Failed to load profile:", error);
    }
  }
  return (
    <header className="dashboard-topbar">
      {/* Left */}

      <div className="dashboard-topbar-left">
        <button
          className="dashboard-menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} />
        </button>

        <h2>{title}</h2>
      </div>

      {/* Right */}

      <div className="dashboard-topbar-right">
        {/* Health Score */}

        <div className="dashboard-health-pill">
          <HeartPulse size={18} className="heart-icon" />

          <span>Health Score: {healthScore}</span>
        </div>

        {/* Notification */}

        <button className="dashboard-icon-btn">
          <Bell size={21} />

          <span className="notification-dot"></span>
        </button>

        {/* Theme */}

        <button className="dashboard-icon-btn">
          <Moon size={21} />
        </button>

        {/* User Menu */}

        <UserMenu />
      </div>
    </header>
  );
}
