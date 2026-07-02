import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { registerUser, googleLogin } from "../../api/auth";
import { GoogleLogin } from "@react-oauth/google";

import { motion } from "framer-motion";

import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

import "./Signup.css";

export default function Signup() {
  // =========================
  // State
  // =========================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [acceptTerms, setAcceptTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter a password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!acceptTerms) {
      setError("Please accept the Terms & Conditions.");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        name,
        email,
        password,
      });

      alert("Account created successfully!");

      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async (credentialResponse) => {
    if (!credentialResponse.credential) {
      setError("Google did not return a valid ID token.");
      return;
    }

    try {
      const data = await googleLogin(credentialResponse.credential);

      localStorage.setItem("access_token", data.access_token);

      localStorage.setItem("token_type", data.token_type);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <Navbar />

      <section className="signup-page">
        <div className="signup-container">
          {/* ================= LEFT ================= */}

          <motion.div
            className="signup-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="signup-badge">🚀 Join BiteCount AI</span>

            <h1>
              Create Your
              <span> Free Account</span>
            </h1>

            <p>
              Start tracking your nutrition, receive AI-powered meal
              recommendations and monitor your health progress with BiteCount
              AI.
            </p>

            <div className="signup-features">
              <div>✅ AI Nutrition Analysis</div>

              <div>✅ Personalized Meal Planner</div>

              <div>✅ Health Reports & Insights</div>

              <div>✅ Smart Deficiency Detection</div>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            className="signup-card"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Create Account</h2>

            <form onSubmit={handleSignup}>
              {/* Full Name */}

              <div className="input-group">
                <User size={20} />

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email */}

              <div className="input-group">
                <Mail size={20} />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}

              <div className="input-group">
                <Lock size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Confirm Password */}

              <div className="input-group">
                <Lock size={20} />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {/* Terms */}

              <div className="signup-options">
                <label>
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms(!acceptTerms)}
                  />
                  I agree to the Terms & Conditions
                </label>
              </div>

              {/* Create Button */}
              {error && <p className="signup-error">{error}</p>}
              <button type="submit" className="signup-btn" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}

                {!loading && <ArrowRight size={18} />}
              </button>
            </form>

            {/* Divider */}

            <div className="divider">
              <span>OR</span>
            </div>

            {/* Google */}

            <div className="google-login">
              <GoogleLogin
                onSuccess={handleGoogleSignup}
                onError={() => {
                  setError("Google Signup Failed.");
                }}
              />
            </div>

            {/* Login */}

            <p className="login-text">
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
