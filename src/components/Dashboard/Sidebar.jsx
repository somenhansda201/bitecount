import {
  LayoutDashboard,
  UtensilsCrossed,
  BarChart3,
  TriangleAlert,
  Sparkles,
  CalendarDays,
  MessageSquare,
  FileText,
  User,
  Settings,
  Shield,
  LogOut,
} from "lucide-react";

import { motion } from "framer-motion";
import { useSidebar } from "../../context/SidebarContext";

import "./Sidebar.css";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: UtensilsCrossed, label: "Food Log" },
  { icon: BarChart3, label: "Nutrition Analysis" },
  { icon: TriangleAlert, label: "Deficiency Detection" },
  { icon: Sparkles, label: "AI Recommendation" },
  { icon: CalendarDays, label: "Meal Planner" },
  { icon: MessageSquare, label: "AI Assistant" },
  { icon: FileText, label: "Health Reports" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
  { icon: Shield, label: "Admin" },
];

export default function Sidebar() {

  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <>
      <aside
        className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}
      >
        {/* Header */}

        <div className="dashboard-sidebar-header">
          <div className="dashboard-logo">
            <motion.div
              className="dashboard-logo-icon"
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              🌿
            </motion.div>

            <h2>
              Bite<span>Count</span>
            </h2>
          </div>
        </div>

        {/* Body */}

        <div className="dashboard-sidebar-body">
          <nav className="dashboard-menu">
            {menuItems.map((item, index) => {

              const Icon = item.icon;

              return (
                <button
                  key={index}
                  className={`dashboard-menu-item ${
                    item.active ? "active" : ""
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon size={20} />

                  <span>{item.label}</span>
                </button>
              );

            })}
          </nav>
        </div>

        {/* Bottom */}

        <div className="dashboard-bottom">

          <hr className="dashboard-divider" />

          <button className="dashboard-logout">

            <LogOut size={20} />

            <span>Sign Out</span>

          </button>

        </div>
      </aside>

      {/* Overlay */}

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}