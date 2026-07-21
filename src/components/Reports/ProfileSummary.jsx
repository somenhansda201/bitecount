import { ClipboardList } from "lucide-react";
import "./ProfileSummary.css";

export default function ProfileSummary({ profile }) {
  if (!profile) {
    return (
      <div className="profile-summary-card">
        <div className="profile-title">
          <ClipboardList size={22} />
          <h3>Profile Summary</h3>
        </div>

        <div className="profile-summary-loading">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="profile-summary-card">
      <div className="profile-title">
        <ClipboardList size={22} />
        <h3>Profile Summary</h3>
      </div>

      <ul className="profile-summary-list">
        <li>
          <span className="bullet"></span>
          <span>
            <strong>Name:</strong> {profile.full_name}
          </span>
        </li>

        <li>
          <span className="bullet"></span>
          <span>
            <strong>Age:</strong> {profile.age} | {profile.gender}
          </span>
        </li>

        <li>
          <span className="bullet"></span>
          <span>
            <strong>Health Conditions:</strong>{" "}
            {profile.conditions && profile.conditions.length > 0
              ? profile.conditions.join(", ")
              : "None"}
          </span>
        </li>

        <li>
          <span className="bullet"></span>
          <span>
            <strong>BMI:</strong> {profile.bmi} — {profile.bmi_category}
          </span>
        </li>

        <li>
          <span className="bullet"></span>
          <span>
            <strong>BMR:</strong> {profile.bmr} kcal/day
          </span>
        </li>

        <li>
          <span className="bullet"></span>
          <span>
            <strong>TDEE:</strong> {profile.tdee} kcal/day
          </span>
        </li>
      </ul>
    </div>
  );
}
