import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

import { motion } from "framer-motion";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import "./Login.css";

export default function Login() {
  // =========================
  // State
  // =========================

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // Login Handler
  // =========================

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    // Backend API will be connected here later

    setTimeout(() => {
      setLoading(false);
      alert("Frontend validation successful!");
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <section className="login-page">
        <div className="login-container">

          {/* ================= Left Side ================= */}

          <motion.div
            className="login-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="login-badge">
              🔐 Welcome Back
            </span>

            <h1>
              Sign in to
              <span> BiteCount AI</span>
            </h1>

            <p>
              Continue your nutrition journey with AI-powered
              meal tracking, smart recommendations and
              health analytics.
            </p>

            <div className="login-features">
              <div>✅ AI Nutrition Analysis</div>
              <div>✅ Personalized Meal Planning</div>
              <div>✅ Health Reports & Insights</div>
              <div>✅ Deficiency Detection</div>
            </div>
          </motion.div>

          {/* ================= Right Side ================= */}

          <motion.div
            className="login-card"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Login</h2>

            <form onSubmit={handleLogin}>

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
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              {/* Remember Me */}

              <div className="login-options">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>

                <Link to="#">
                  Forgot Password?
                </Link>
              </div>

              {/* Error */}

              {error && (
                <p className="login-error">
                  {error}
                </p>
              )}

              {/* Login Button */}

              <button
                type="submit"
                className="login-btn"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Login"}

                {!loading && <ArrowRight size={18} />}
              </button>

            </form>

            {/* Divider */}

            <div className="divider">
              <span>OR</span>
            </div>

            {/* Google Button */}

            <button
              type="button"
              className="google-btn"
            >
              Continue with Google
            </button>

            {/* Signup */}

            <p className="signup-text">
              Don't have an account?

              <Link to="/signup">
                Create Account
              </Link>
            </p>

          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}