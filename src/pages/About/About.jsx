import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

import { motion } from "framer-motion";

import {
  Brain,
  Salad,
  ShieldCheck,
  BarChart3,
  Database,
  Cpu,
} from "lucide-react";

import "./About.css";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="about-hero">

        <div className="about-container">

          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="about-tag">
              🌿 About BiteCount AI
            </span>

            <h1>

              Building a Smarter

              <span> Future of Nutrition</span>

            </h1>

            <p>

              BiteCount AI is an intelligent nutrition platform
              that combines Artificial Intelligence,
              nutritional science and modern technology
              to help people make healthier food choices.

            </p>

          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="about-placeholder">

              🧠

              <h3>AI Nutrition Platform</h3>

              <p>

                Project illustration
                will appear here later.

              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="mission">

        <div className="mission-grid">

          <div className="mission-card">

            <h2>🎯 Our Mission</h2>

            <p>

              To make healthy living accessible through
              AI-powered nutrition guidance and
              personalized recommendations.

            </p>

          </div>

          <div className="mission-card">

            <h2>🚀 Our Vision</h2>

            <p>

              To become a trusted AI assistant that helps
              people worldwide achieve healthier lifestyles.

            </p>

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="why-us">

        <h2>Why Choose BiteCount AI?</h2>

        <div className="why-grid">

          <div className="why-card">
            <Salad size={40}/>
            <h3>Nutrition Tracking</h3>
          </div>

          <div className="why-card">
            <Brain size={40}/>
            <h3>AI Recommendations</h3>
          </div>

          <div className="why-card">
            <ShieldCheck size={40}/>
            <h3>Deficiency Detection</h3>
          </div>

          <div className="why-card">
            <BarChart3 size={40}/>
            <h3>Interactive Reports</h3>
          </div>

        </div>

      </section>

      {/* Technology */}

      <section className="technology">

        <h2>Technology Stack</h2>

        <div className="tech-grid">

          <div className="tech-card">React</div>
          <div className="tech-card">FastAPI</div>
          <div className="tech-card">Python</div>
          <div className="tech-card">MongoDB</div>
          <div className="tech-card">
            <Database size={22}/> Database
          </div>
          <div className="tech-card">
            <Cpu size={22}/> AI Engine
          </div>

        </div>

      </section>

      {/* Team */}

      <section className="team">

        <h2>Meet Our Team</h2>

        <div className="team-grid">

          <div className="member">
            <div className="avatar">👨‍💻</div>
            <h3>Project Guide</h3>
          </div>

          <div className="member">
            <div className="avatar">👨‍💼</div>
            <h3>Team Leader</h3>
          </div>

          <div className="member">
            <div className="avatar">👨‍💻</div>
            <h3>Developer</h3>
          </div>

          <div className="member">
            <div className="avatar">👩‍💻</div>
            <h3>Developer</h3>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}