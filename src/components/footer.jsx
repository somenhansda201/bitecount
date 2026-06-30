import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>
            🌿 <span>BiteCount</span>
          </h2>

          <p>
            AI-powered nutrition analysis, smart meal planning,
            deficiency detection and personalized health insights
            to help you live a healthier life.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        {/* Features */}
        <div className="footer-column">
          <h4>Features</h4>

          <a href="#features">Nutrition Analysis</a>
          <a href="#features">Meal Planner</a>
          <a href="#features">AI Recommendation</a>
          <a href="#features">Reports</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>

          <a href="mailto:support@bitecount.ai">
            support@bitecount.ai
          </a>

          <a href="tel:+919876543210">
            +91 98765 43210
          </a>

          <span>Kolkata, India</span>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 BiteCount AI. All Rights Reserved.
        </p>

        <button
          className="scroll-top"
          onClick={scrollTop}
        >
          ↑
        </button>

      </div>
    </footer>
  );
}