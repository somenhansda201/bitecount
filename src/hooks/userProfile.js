import { useEffect, useMemo, useState } from "react";

import {
  getProfile,
  createProfile,
  updateProfile,
} from "../services/profileService";

import { computeHealth } from "../utils/Profile/computeHealth";
import { bmiCategory } from "../utils/Profile/bmiCategory";

export default function useProfile() {
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    activity: "",
  });

  const [conditions, setConditions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileExists, setProfileExists] = useState(false);

  const update = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const toggleCondition = (condition) => {
    setConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((item) => item !== condition)
        : [...prev, condition],
    );
  };

  const loadProfile = async () => {
    try {
      const profile = await getProfile();

      setForm({
        fullName: profile.full_name,
        age: String(profile.age),
        gender: profile.gender,
        weight: String(profile.weight),
        height: String(profile.height),
        activity: profile.activity,
      });

      setConditions(profile.conditions || []);
      setProfileExists(true);

      localStorage.setItem("health_score", profile.health_score);
    } catch (err) {
      console.log("Profile not found.");
      setProfileExists(false);
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = async () => {
    if (!health) return;

    const profileData = {
      full_name: form.fullName,
      age: Number(form.age),
      gender: form.gender,
      height: Number(form.height),
      weight: Number(form.weight),
      activity: form.activity,
      conditions,

      bmi: health.bmi,
      bmi_category: category?.label || "",
      bmr: health.bmr,
      tdee: health.tdee,
      weight_goal: health.weightLossTarget,
    };

    try {
      let savedProfile;

      if (profileExists) {
        savedProfile = await updateProfile(profileData);
      } else {
        savedProfile = await createProfile(profileData);
        setProfileExists(true);
      }

      localStorage.setItem("health_score", savedProfile.health_score);

      alert("Profile saved successfully.");

      return savedProfile;
    } catch (err) {
      console.error(err);
      alert("Failed to save profile.");
      throw err;
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const health = useMemo(() => computeHealth(form), [form]);

  const category = health ? bmiCategory(health.bmi) : null;

  return {
    form,
    update,
    conditions,
    toggleCondition,
    health,
    category,
    loading,
    profileExists,
    saveProfile,
  };
}
