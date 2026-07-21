import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

import NotificationItem from "./notificationitem";
import {
  getSettings,
  updateSettings,
} from "../../services/settingsService";

export default function NotificationsCard() {
  const [settings, setSettings] = useState({
    email_notifications: true,
    meal_reminders: true,
    deficiency_alerts: true,
    hydration_reminders: true,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await getSettings();
      setSettings(data);
    } catch (error) {
      console.error("Failed to load settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSetting = async (key) => {
    const updatedSettings = {
      ...settings,
      [key]: !settings[key],
    };

    // Optimistic UI update
    setSettings(updatedSettings);

    try {
      await updateSettings(updatedSettings);
    } catch (error) {
      console.error("Failed to update settings:", error);

      // Roll back on failure
      setSettings(settings);
    }
  };

  if (loading) {
    return (
      <div className="settings-card">
        <p>Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="settings-card">
      <div className="settings-card-header">
        <Bell size={22} className="settings-icon" />
        <h3>Notifications</h3>
      </div>

      <NotificationItem
        title="Email Notifications"
        description="Receive weekly nutrition summaries via email"
        enabled={settings.email_notifications}
        onToggle={() => toggleSetting("email_notifications")}
      />

      <NotificationItem
        title="Meal Logging Reminders"
        description="Get reminded to log meals at breakfast, lunch and dinner"
        enabled={settings.meal_reminders}
        onToggle={() => toggleSetting("meal_reminders")}
      />

      <NotificationItem
        title="Deficiency Alerts"
        description="Be notified when critical deficiencies are detected"
        enabled={settings.deficiency_alerts}
        onToggle={() => toggleSetting("deficiency_alerts")}
      />

      <NotificationItem
        title="Hydration Reminders"
        description="Get hourly water intake reminders"
        enabled={settings.hydration_reminders}
        onToggle={() => toggleSetting("hydration_reminders")}
      />
    </div>
  );
}