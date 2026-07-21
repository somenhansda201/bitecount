import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { changePassword } from "../../api/auth";

import "./ChangePasswordDialog.css";

export default function ChangePasswordDialog({ open, onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (open) {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setError("");
      setSuccess("");
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!currentPassword) {
      setError("Current password is required.");

      return;
    }

    if (!newPassword) {
      setError("New password is required.");

      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");

      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");

      return;
    }

    try {
      setLoading(true);

      const response = await changePassword(currentPassword, newPassword);

      setSuccess(response.message);

      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="change-password-overlay" onClick={onClose}>
      <div
        className="change-password-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Change Password</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="password-group">
            <label>Current Password</label>

            <div className="password-input">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                autoComplete="current-password"
              />

              <button
                type="button"
                className="change-password-toggle"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="password-group">
            <label>New Password</label>

            <div className="password-input">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                autoComplete="new-password"
              />

              <button
                type="button"
                className="change-password-toggle"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="password-group">
            <label>Confirm Password</label>

            <div className="password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                autoComplete="new-password"
              />

              <button
                type="button"
                className="change-password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <p className="password-error">{error}</p>}

          {success && <p className="password-success">{success}</p>}

          <div className="change-password-footer">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>

            <button
              type="submit"
              className="change-password-btn"
              disabled={loading}
            >
              {loading ? "Changing..." : "Change Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
