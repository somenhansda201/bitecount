import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import "./Navbar.css";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "navbar-scroll" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          {/* Logo */}

          <Link className="logo" to="/">
            <motion.div
              whileHover={{
                rotate: 15,
                scale: 1.1,
              }}
              className="logo-icon"
            >
              🌿
            </motion.div>

            <h2>
              Bite<span>Count</span>
            </h2>
          </Link>

          {/* Desktop Menu */}

          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/features"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Features
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Buttons */}

          <div className="nav-buttons">
            <Link className="navbar-login-btn" to="/login">
              Login
            </Link>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link className="navbar-signup-btn" to="/signup">
                Get Started →
              </Link>
            </motion.div>
          </div>

          {/* Hamburger */}

          <button
            className="hamburger"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <NavLink to="/">Home</NavLink>

            <NavLink to="/features">Features</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/contact">Contact</NavLink>

            <Link to="/login">Login</Link>

            <Link to="/signup" className="mobile-signup">
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
