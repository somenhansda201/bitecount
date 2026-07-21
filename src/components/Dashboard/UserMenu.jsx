import { useEffect, useRef, useState } from "react";
import { User, Lock, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../../api/auth";
import AccountDialog from "./AccountDialog";
import ChangePasswordDialog from "./ChangePasswordDialog";

import "./UserMenu.css";

export default function UserMenu() {
  const navigate = useNavigate();

  const menuRef = useRef(null);

  const [open, setOpen] = useState(false);

  const [showAccount, setShowAccount] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  function getInitials(name) {
    if (!name) return "?";

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
      return words[0][0].toUpperCase();
    }

    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }

  function handleLogout() {
    logoutUser();

    navigate("/login");
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="user-menu" ref={menuRef}>
        <button className="user-menu-trigger" onClick={() => setOpen(!open)}>
          <div className="dashboard-profile">{getInitials(user?.name)}</div>
        </button>

        {open && (
          <div className="user-dropdown">
            <button
              className="user-dropdown-item"
              onClick={() => {
                setOpen(false);

                setShowAccount(true);
              }}
            >
              <User size={18} />

              <span>My Profile</span>
            </button>

            <button
              className="user-dropdown-item"
              onClick={() => {
                setOpen(false);

                setShowChangePassword(true);
              }}
            >
              <Lock size={18} />

              <span>Change Password</span>
            </button>

            <hr />

            <button
              className="user-dropdown-item logout"
              onClick={handleLogout}
            >
              <LogOut size={18} />

              <span>Sign Out</span>
            </button>
          </div>
        )}
      </div>

      <AccountDialog
        open={showAccount}
        onClose={() => setShowAccount(false)}
        user={user}
        initials={getInitials(user?.name)}
      />

      <ChangePasswordDialog
        open={showChangePassword}
        onClose={() => setShowChangePassword(false)}
      />
    </>
  );
}
