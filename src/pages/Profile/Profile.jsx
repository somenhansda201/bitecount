import React from "react";
import "./Profile.css";
import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import "../Dashboard/Dashboard.css";

import PersonalInfoCard from "../../components/Profile/PersonalInfoCard";
import HealthConditionsCard from "../../components/Profile/HealthConditionCard";
import BMICard from "../../components/Profile/BMICard";
import BMRCard from "../../components/Profile/BMRCard";
import TDEECard from "../../components/Profile/TDEECard";
import WeightGoalCard from "../../components/Profile/WeightGoalCard";
import useProfile from "../../hooks/userProfile";
import { ACTIVITY_LEVELS, CONDITIONS } from "../../utils/Profile/constants";

export default function Profile() {
  const {
    form,
    update,
    conditions,
    toggleCondition,
    health,
    category,
    saveProfile,
  } = useProfile();

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <div className="profile-page">
            <div className="profile-left">
              <PersonalInfoCard
                form={form}
                update={update}
                ACTIVITY_LEVELS={ACTIVITY_LEVELS}
              />

              <HealthConditionsCard
                CONDITIONS={CONDITIONS}
                conditions={conditions}
                toggleCondition={toggleCondition}
              />
            </div>

            <div className="profile-right">
              <BMICard health={health} category={category} />

              {health && (
                <>
                  <BMRCard health={health} />
                  <TDEECard health={health} />
                  <WeightGoalCard health={health} />
                </>
              )}
              <div className="profile-actions">
                <button className="save-profile-btn" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
