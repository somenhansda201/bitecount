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
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: UtensilsCrossed, label: "Food Log", path: "/foodlog" },
  { icon: BarChart3, label: "Nutrition Analysis", path: "/nutrition" },
  { icon: TriangleAlert, label: "Deficiency Detection", path: "/deficiency" },
  { icon: Sparkles, label: "AI Recommendation", path: "/recommendation" },
  { icon: CalendarDays, label: "Meal Planner", path: "/mealplanner" },
  { icon: MessageSquare, label: "AI Assistant", path: "/chat" },
  { icon: FileText, label: "Health Reports", path: "/reports" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <>
      <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>
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
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `dashboard-menu-item ${isActive ? "active" : ""}`
                  }
                >
                  <Icon size={20} />

                  <span>{item.label}</span>
                </NavLink>
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
