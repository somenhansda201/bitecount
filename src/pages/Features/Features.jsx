import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  Brain,
  Salad,
  CalendarDays,
  Activity,
  MessageCircle,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import "./Features.css";

const features = [
  {
    icon: <Salad size={36} />,
    title: "Nutrition Analysis",
    description:
      "Analyze calories, protein, carbohydrates, vitamins and minerals with AI.",
  },
  {
    icon: <Brain size={36} />,
    title: "AI Recommendation",
    description:
      "Receive personalized meal recommendations based on your health goals.",
  },
  {
    icon: <CalendarDays size={36} />,
    title: "Meal Planner",
    description: "Generate balanced breakfast, lunch, dinner and snack plans.",
  },
  {
    icon: <Activity size={36} />,
    title: "Deficiency Detection",
    description:
      "Identify nutrient deficiencies before they affect your health.",
  },
  {
    icon: <MessageCircle size={36} />,
    title: "AI Nutrition Chat",
    description:
      "Ask nutrition questions and receive intelligent answers instantly.",
  },
  {
    icon: <BarChart3 size={36} />,
    title: "Reports & Analytics",
    description: "Track your progress with interactive charts and AI insights.",
  },
];

const workingSteps = [
  {
    number: "01",
    icon: "👤",
    title: "Create Account",
    description:
      "Create your BiteCount account and complete your health profile.",
  },
  {
    number: "02",
    icon: "🍽️",
    title: "Log Your Meals",
    description: "Record everything you eat throughout the day.",
  },
  {
    number: "03",
    icon: "🤖",
    title: "AI Nutrition Analysis",
    description:
      "Our AI evaluates calories, nutrients and possible deficiencies.",
  },
  {
    number: "04",
    icon: "💡",
    title: "Receive Recommendations",
    description: "Get personalized meal plans and nutrition suggestions.",
  },
];

const whyChoose = [
  {
    icon: "🤖",
    title: "AI-Powered Analysis",
    description:
      "Advanced AI analyzes your meals and provides intelligent nutritional insights.",
  },
  {
    icon: "🥗",
    title: "Personalized Meal Plans",
    description:
      "Meal recommendations are tailored to your age, weight, goals and lifestyle.",
  },
  {
    icon: "📊",
    title: "Smart Reports",
    description:
      "Interactive dashboards help you monitor your nutrition and health progress.",
  },
  {
    icon: "⚡",
    title: "Real-Time Recommendations",
    description: "Receive instant suggestions after every meal you log.",
  },
  {
    icon: "🔒",
    title: "Secure Health Data",
    description: "Your nutrition records are securely stored and protected.",
  },
  {
    icon: "📱",
    title: "Simple & Modern Experience",
    description:
      "Clean design that works beautifully on desktop, tablet and mobile.",
  },
];

const faqs = [
  {
    question: "Is BiteCount AI free to use?",
    answer:
      "Yes. BiteCount AI offers a free version with core nutrition tracking features. Premium features can be added in the future.",
  },
  {
    question: "How does the AI analyze my nutrition?",
    answer:
      "Our AI evaluates the nutritional information of your meals and provides insights based on recommended dietary guidelines.",
  },
  {
    question: "Can I use BiteCount on my mobile phone?",
    answer:
      "Yes. BiteCount AI is fully responsive and works on desktops, tablets, and smartphones.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "Yes. Your personal and nutrition data is securely stored and protected using modern security practices.",
  },
  {
    question: "Can BiteCount create personalized meal plans?",
    answer:
      "Yes. Meal plans are generated according to your age, weight, activity level, and health goals.",
  },
];

export default function Features() {
  const [openFAQ, setOpenFAQ] = useState(null);
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="features-hero">
        <div className="hero-content">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">✨ AI Powered Nutrition Platform</span>

            <h1>
              Everything You Need
              <span> For Smart Nutrition</span>
            </h1>

            <p>
              BiteCount AI combines artificial intelligence, nutrition science
              and smart analytics into one powerful platform.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Get Started
                <ArrowRight size={18} />
              </button>

              <button className="secondary-btn">Live Demo</button>
            </div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="dashboard-preview">
              <h3>Dashboard Preview</h3>

              <div className="progress-box">
                <span>Calories</span>

                <div className="bar">
                  <div style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="progress-box">
                <span>Protein</span>

                <div className="bar protein">
                  <div style={{ width: "65%" }}></div>
                </div>
              </div>

              <div className="progress-box">
                <span>Water Intake</span>

                <div className="bar water">
                  <div style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="features-section">
        <div className="section-heading">
          <h2>Powerful Features</h2>

          <p>Everything you need for smarter nutrition and healthier living.</p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
            >
              <div className="icon-box">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="working-section">
        <div className="section-heading">
          <h2>How BiteCount Works</h2>

          <p>Start improving your nutrition in four simple steps.</p>
        </div>

        <div className="working-grid">
          {workingSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="working-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <div className="step-number">{step.number}</div>

              <div className="step-icon">{step.icon}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}

      <section className="why-section">
        <div className="section-heading">
          <h2>Why Choose BiteCount AI?</h2>

          <p>
            Everything you need to achieve a healthier lifestyle with the power
            of Artificial Intelligence.
          </p>
        </div>

        <div className="why-grid">
          {whyChoose.map((item, index) => (
            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="faq-section">
        <div className="section-heading">
          <h2>Frequently Asked Questions</h2>

          <p>Find answers to the most common questions about BiteCount AI.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span>{faq.question}</span>

                <span>{openFAQ === index ? "−" : "+"}</span>
              </button>

              {openFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
