import "./AccountDialog.css";

export default function AccountDialog({ open, onClose, user, initials }) {
  if (!open) return null;

  return (
    <div className="account-dialog-overlay" onClick={onClose}>
      <div className="account-dialog" onClick={(e) => e.stopPropagation()}>
        <h2>Account</h2>

        <div className="account-avatar">{initials}</div>

        <div className="account-form">
          <div className="account-form-group">
            <label>Full Name</label>

            <div className="account-readonly">{user?.name}</div>
          </div>

          <div className="account-form-group">
            <label>Email Address</label>

            <div className="account-readonly">{user?.email}</div>
          </div>
        </div>

        <div className="account-dialog-footer">
          <button className="account-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
