import { useState, useEffect, useRef } from "react";




// ─── Icons (inline SVG components) ────────────────────────────────────────────
const Icon = ({ d, size = 20, stroke = "currentColor", fill = "none", strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((path, i) => <path key={i} d={path} />) : <path d={d} />}
  </svg>
);

const icons = {
  home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
  food: "M18 8h1a4 4 0 0 1 0 8h-1 M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z M6 1v3 M10 1v3 M14 1v3",
  chart: "M18 20V10 M12 20V4 M6 20v-6",
  brain: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.98-3 2.5 2.5 0 0 1-1.32-4.24 3 3 0 0 1 .34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",
  calendar: "M8 2v4 M16 2v4 M3 10h18 M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z",
  report: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
  chat: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  settings: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 8v4 M12 16h.01",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  bell: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0",
  sun: "M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42 M12 5a7 7 0 1 0 0 14A7 7 0 0 0 12 5z",
  moon: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
  send: "M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z",
  plus: "M12 5v14 M5 12h14",
  search: "M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0",
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  trending: "M23 6l-9.5 9.5-5-5L1 18 M17 6h6v6",
  fire: "M12 2c0 0-5 5.5-5 9.5a5 5 0 0 0 10 0C17 7.5 12 2 12 2z",
  leaf: "M2 22 16 8 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  close: "M18 6L6 18 M6 6l12 12",
  menu: "M3 12h18 M3 6h18 M3 18h18",
  check: "M20 6L9 17l-5-5",
  info: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 16v-4 M12 8h.01",
  admin: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 8v4l3 3",
  logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
  drop: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
  warning: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01",
};

// ─── Color Palette & Theme ─────────────────────────────────────────────────────
const theme = {
  primary: "#22C55E",
  primaryDark: "#16A34A",
  accent: "#0EA5E9",
  bg: "#F8FAFC",
  bgDark: "#0F172A",
  card: "#FFFFFF",
  cardDark: "#1E293B",
  text: "#0F172A",
  textDark: "#F1F5F9",
  muted: "#64748B",
  border: "#E2E8F0",
  borderDark: "#334155",
};

// ─── Mock Data ─────────────────────────────────────────────────────────────────
const mockNutritionData = {
  calories: { consumed: 1840, target: 2200, unit: "kcal" },
  protein: { consumed: 98, target: 140, unit: "g" },
  carbs: { consumed: 210, target: 275, unit: "g" },
  fat: { consumed: 62, target: 73, unit: "g" },
  water: { consumed: 1.8, target: 2.5, unit: "L" },
  fiber: { consumed: 18, target: 25, unit: "g" },
};

const weeklyData = [
  { day: "Mon", calories: 2100, protein: 120, carbs: 260, fat: 70 },
  { day: "Tue", calories: 1950, protein: 110, carbs: 240, fat: 65 },
  { day: "Wed", calories: 2250, protein: 135, carbs: 280, fat: 75 },
  { day: "Thu", calories: 1800, protein: 95, carbs: 220, fat: 58 },
  { day: "Fri", calories: 2050, protein: 118, carbs: 255, fat: 68 },
  { day: "Sat", calories: 2300, protein: 140, carbs: 290, fat: 78 },
  { day: "Sun", calories: 1840, protein: 98, carbs: 210, fat: 62 },
];

const deficiencies = [
  { nutrient: "Iron", level: 35, status: "low", severity: "red", rdi: "18mg", current: "6.3mg", emoji: "🔴" },
  { nutrient: "Vitamin D", level: 42, status: "low", severity: "yellow", rdi: "600IU", current: "252IU", emoji: "🟡" },
  { nutrient: "Vitamin B12", level: 78, status: "normal", severity: "green", rdi: "2.4μg", current: "1.87μg", emoji: "🟢" },
  { nutrient: "Calcium", level: 55, status: "low", severity: "yellow", rdi: "1000mg", current: "550mg", emoji: "🟡" },
  { nutrient: "Magnesium", level: 82, status: "normal", severity: "green", rdi: "400mg", current: "328mg", emoji: "🟢" },
  { nutrient: "Potassium", level: 68, status: "normal", severity: "green", rdi: "3500mg", current: "2380mg", emoji: "🟢" },
  { nutrient: "Zinc", level: 30, status: "low", severity: "red", rdi: "11mg", current: "3.3mg", emoji: "🔴" },
  { nutrient: "Folate", level: 61, status: "normal", severity: "green", rdi: "400μg", current: "244μg", emoji: "🟢" },
];

const foodDatabase = [
  { name: "Brown Rice", calories: 216, protein: 5, carbs: 45, fat: 2, fiber: 3.5, icon: "🍚" },
  { name: "Chicken Breast", calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, icon: "🍗" },
  { name: "Whole Egg", calories: 78, protein: 6, carbs: 0.6, fat: 5, fiber: 0, icon: "🥚" },
  { name: "Whole Milk", calories: 149, protein: 8, carbs: 12, fat: 8, fiber: 0, icon: "🥛" },
  { name: "Salmon", calories: 208, protein: 28, carbs: 0, fat: 12, fiber: 0, icon: "🐟" },
  { name: "Apple", calories: 95, protein: 0.5, carbs: 25, fat: 0.3, fiber: 4.4, icon: "🍎" },
  { name: "Banana", calories: 105, protein: 1.3, carbs: 27, fat: 0.4, fiber: 3.1, icon: "🍌" },
  { name: "Whole Wheat Bread", calories: 69, protein: 3.6, carbs: 12, fat: 1, fiber: 1.9, icon: "🍞" },
  { name: "Oats", calories: 307, protein: 10, carbs: 55, fat: 5, fiber: 8, icon: "🌾" },
  { name: "Spinach", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, icon: "🥬" },
  { name: "Greek Yogurt", calories: 100, protein: 17, carbs: 6, fat: 0.7, fiber: 0, icon: "🫙" },
  { name: "Almonds", calories: 164, protein: 6, carbs: 6, fat: 14, fiber: 3.5, icon: "🥜" },
];

const aiRecommendations = [
  {
    food: "Spinach",
    qty: "100g",
    calories: 23,
    reason: "Critical iron deficiency detected (35% of RDI). Spinach provides 2.7mg of non-heme iron per 100g.",
    icon: "🥬",
    priority: "high",
  },
  {
    food: "Eggs",
    qty: "2 whole eggs",
    calories: 156,
    reason: "Protein intake below target (70% of goal). Eggs are a complete protein with all essential amino acids.",
    icon: "🥚",
    priority: "medium",
  },
  {
    food: "Greek Yogurt",
    qty: "200g",
    calories: 200,
    reason: "Calcium at 55% RDI. Greek yogurt provides ~200mg calcium plus probiotics for gut health.",
    icon: "🫙",
    priority: "medium",
  },
  {
    food: "Salmon",
    qty: "150g",
    calories: 312,
    reason: "Vitamin D deficiency at 42% RDI. Salmon is one of the best natural sources of Vitamin D3.",
    icon: "🐟",
    priority: "high",
  },
];

const avoidFoods = [
  { food: "Sugary Drinks", reason: "Empty calories, insulin spike risk", icon: "🥤" },
  { food: "Processed Snacks", reason: "High sodium, low nutrient density", icon: "🍟" },
  { food: "White Bread", reason: "Refined carbs, low fiber content", icon: "🍞" },
];

const chatHistory = [
  { role: "ai", message: "Hello! I'm BiteCount AI 🌿 Your personal nutrition intelligence. How can I help you today?" },
  { role: "user", message: "Why am I low in iron?" },
  {
    role: "ai",
    message:
      "Based on your food logs, your iron intake is at 35% of your daily requirement (6.3mg vs 18mg RDI). This is likely due to:\n\n• Limited red meat or leafy greens in recent meals\n• High tea/coffee consumption (inhibits iron absorption)\n\nI recommend adding spinach, lentils, or fortified cereals to your next meals. Pair with Vitamin C for better absorption! 🥬",
  },
];

const mealPlan = {
  breakfast: {
    name: "Power Protein Bowl",
    foods: [
      { item: "Greek Yogurt", qty: "200g", cal: 200, protein: 34 },
      { item: "Oats", qty: "80g", cal: 246, protein: 8 },
      { item: "Banana", qty: "1 medium", cal: 105, protein: 1.3 },
    ],
    total: { cal: 551, protein: 43.3 },
    reason: "High protein start to meet daily protein targets and low glycemic index for stable blood sugar",
  },
  lunch: {
    name: "Iron-Rich Grain Bowl",
    foods: [
      { item: "Brown Rice", qty: "150g", cal: 324, protein: 7.5 },
      { item: "Chicken Breast", qty: "120g", cal: 198, protein: 37.2 },
      { item: "Spinach", qty: "100g", cal: 23, protein: 2.9 },
    ],
    total: { cal: 545, protein: 47.6 },
    reason: "Iron + protein combination addresses two key deficiencies. Vitamin C from lemon dressing boosts iron absorption",
  },
  dinner: {
    name: "Omega-3 Plate",
    foods: [
      { item: "Salmon", qty: "150g", cal: 312, protein: 42 },
      { item: "Steamed Broccoli", qty: "150g", cal: 52, protein: 4.5 },
      { item: "Sweet Potato", qty: "100g", cal: 86, protein: 1.6 },
    ],
    total: { cal: 450, protein: 48.1 },
    reason: "Vitamin D from salmon addresses deficiency. Omega-3s support heart health. Complex carbs for sustained energy",
  },
  snacks: {
    name: "Nutrient Snacks",
    foods: [
      { item: "Almonds", qty: "30g", cal: 164, protein: 6 },
      { item: "Apple", qty: "1 medium", cal: 95, protein: 0.5 },
    ],
    total: { cal: 259, protein: 6.5 },
    reason: "Healthy fats and fiber to prevent afternoon energy crash. Vitamin C from apple aids iron absorption",
  },
};

// ─── Utility Components ────────────────────────────────────────────────────────
const ProgressBar = ({ value, max, color = "#22C55E", height = 8, animated = true }) => {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ background: "#E2E8F0", borderRadius: 99, height, overflow: "hidden" }}>
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          background: color,
          borderRadius: 99,
          transition: animated ? "width 1s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        }}
      />
    </div>
  );
};

const CircularProgress = ({ value, max, size = 80, stroke = 8, color = "#22C55E", label, sublabel }) => {
  const pct = Math.min((value / max) * 100, 100);
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E2E8F0" strokeWidth={stroke} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>{Math.round(pct)}%</span>
        </div>
      </div>
      {label && <span style={{ fontSize: 11, fontWeight: 600, color: "#0F172A" }}>{label}</span>}
      {sublabel && <span style={{ fontSize: 10, color: "#64748B" }}>{sublabel}</span>}
    </div>
  );
};

const Badge = ({ children, color = "#22C55E", bg }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "2px 10px",
      borderRadius: 99,
      fontSize: 11,
      fontWeight: 600,
      color,
      background: bg || color + "18",
    }}
  >
    {children}
  </span>
);

const Card = ({ children, style = {}, glass = false, hover = true, dark = false }) => (
  <div
    style={{
      background: dark
        ? glass
          ? "rgba(30,41,59,0.7)"
          : "#1E293B"
        : glass
        ? "rgba(255,255,255,0.7)"
        : "#FFFFFF",
      backdropFilter: glass ? "blur(20px)" : "none",
      borderRadius: 16,
      border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #E2E8F0",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
      transition: "transform 0.2s, box-shadow 0.2s",
      ...(hover && { cursor: "pointer" }),
      ...style,
    }}
    onMouseEnter={
      hover
        ? (e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(34,197,94,0.12), 0 2px 8px rgba(0,0,0,0.08)";
          }
        : undefined
    }
    onMouseLeave={
      hover
        ? (e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)";
          }
        : undefined
    }
  >
    {children}
  </div>
);

// ─── Mini Bar Chart ────────────────────────────────────────────────────────────
const MiniBarChart = ({ data, dataKey, color = "#22C55E", height = 140 }) => {
  const max = Math.max(...data.map((d) => d[dataKey]));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height, paddingTop: 8 }}>
      {data.map((d, i) => {
        const barH = (d[dataKey] / max) * (height - 24);
        return (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div
              style={{
                width: "100%",
                height: barH,
                background: `linear-gradient(180deg, ${color}, ${color}88)`,
                borderRadius: "4px 4px 0 0",
                transition: "height 0.8s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            <span style={{ fontSize: 10, color: "#64748B", fontWeight: 500 }}>{d.day}</span>
          </div>
        );
      })}
    </div>
  );
};

// ─── Landing Page ──────────────────────────────────────────────────────────────
const LandingPage = ({ onNavigate }) => {
  const features = [
    { icon: "🎯", title: "Smart Nutrient Tracking", desc: "Track calories, protein, carbs, fat, vitamins and minerals in real-time with AI precision.", color: "#22C55E" },
    { icon: "🔬", title: "Deficiency Detection", desc: "Automatically detect iron, Vitamin D, B12, calcium, zinc deficiencies before they impact health.", color: "#0EA5E9" },
    { icon: "🏥", title: "Disease-Aware Diet", desc: "Tailored plans for Diabetes, Hypertension, Heart Disease, Obesity, Thyroid and Kidney conditions.", color: "#F59E0B" },
    { icon: "🧠", title: "Explainable AI", desc: "Understand exactly why each food is recommended with transparent, evidence-based reasoning.", color: "#8B5CF6" },
    { icon: "📅", title: "Smart Meal Planning", desc: "Auto-generate 7-day meal plans personalized to your goals, deficiencies and health conditions.", color: "#EC4899" },
    { icon: "📊", title: "Health Analytics", desc: "BMI, BMR and TDEE calculated with beautiful interactive charts and trend analysis.", color: "#14B8A6" },
  ];

  const steps = [
    { n: "01", title: "Set Up Profile", desc: "Enter age, weight, height, activity level, and health conditions." },
    { n: "02", title: "Log Your Food", desc: "Search and log meals from our database of 50,000+ foods." },
    { n: "03", title: "AI Analyzes", desc: "Our AI detects deficiencies, excesses, and health patterns instantly." },
    { n: "04", title: "Get Recommendations", desc: "Receive personalized meal plans and food recommendations with full explanations." },
  ];

  const testimonials = [
    { name: "Nandan Chakraborty", role: "Fitness Enthusiast", msg: "BiteCount detected my iron deficiency before my doctor did! The AI explanations are incredibly clear.", stars: 5, avatar: "NC" },
    { name: "Rahul Mehta", role: "Diabetic Patient", msg: "Finally an app that understands my health conditions. The disease-aware meal plans are life-changing.", stars: 5, avatar: "RM" },
    { name: "Anjali Singh", role: "Nutritionist", msg: "I recommend BiteCount to all my clients. The nutrient analysis depth is unmatched.", stars: 5, avatar: "AS" },
  ];

  const pricing = [
    { plan: "Free", price: "₹0", period: "forever", features: ["Basic food logging", "Calorie tracking", "7-day history", "Basic charts"], cta: "Get Started", highlight: false },
    {
      plan: "Pro",
      price: "₹299",
      period: "per month",
      features: ["Everything in Free", "AI recommendations", "Deficiency detection", "Meal planning", "Health reports", "AI chat assistant"],
      cta: "Start Free Trial",
      highlight: true,
    },
    { plan: "Clinical", price: "₹799", period: "per month", features: ["Everything in Pro", "Disease-specific plans", "Doctor PDF reports", "Priority support", "API access"], cta: "Contact Sales", highlight: false },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#F8FAFC", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(248,250,252,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #E2E8F0",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #22C55E, #0EA5E9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            🌿
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, color: "#0F172A" }}>
            Bite<span style={{ color: "#22C55E" }}>Count</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => onNavigate("login")}
            style={{
              padding: "8px 20px",
              borderRadius: 10,
              border: "1.5px solid #E2E8F0",
              background: "transparent",
              color: "#0F172A",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Log In
          </button>
          <button
            onClick={() => onNavigate("signup")}
            style={{
              padding: "8px 20px",
              borderRadius: 10,
              border: "none",
              background: "linear-gradient(135deg, #22C55E, #16A34A)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(34,197,94,0.3)",
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: "80px 24px 60px",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 99,
            background: "#22C55E18",
            border: "1px solid #22C55E33",
            fontSize: 13,
            fontWeight: 600,
            color: "#16A34A",
            marginBottom: 24,
          }}
        >
          <span>✨</span> AI-Powered Nutrition Intelligence
        </div>
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "#0F172A",
            marginBottom: 20,
            letterSpacing: "-2px",
          }}
        >
          Eat Smart.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22C55E, #0EA5E9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Live Healthier.
          </span>
        </h1>
        <p style={{ fontSize: 20, color: "#64748B", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.6 }}>
          Track nutrition, detect deficiencies, and receive medically-aware meal recommendations powered by AI.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => onNavigate("signup")}
            style={{
              padding: "14px 32px",
              borderRadius: 12,
              border: "none",
              background: "linear-gradient(135deg, #22C55E, #16A34A)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(34,197,94,0.35)",
              transition: "transform 0.2s",
            }}
          >
            🚀 Get Started Free
          </button>
          <button
            onClick={() => onNavigate("dashboard")}
            style={{
              padding: "14px 32px",
              borderRadius: 12,
              border: "1.5px solid #E2E8F0",
              background: "#fff",
              color: "#0F172A",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            👁 Live Demo
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 60, flexWrap: "wrap" }}>
          {[
            { n: "50K+", l: "Foods Database" },
            { n: "12", l: "Nutrients Tracked" },
            { n: "6", l: "Health Conditions" },
            { n: "98%", l: "User Satisfaction" },
          ].map((s) => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#22C55E" }}>{s.n}</div>
              <div style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "60px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 40, fontWeight: 800, color: "#0F172A", marginBottom: 12, letterSpacing: "-1px" }}>
            Everything you need to
            <br />
            <span style={{ color: "#22C55E" }}>optimize your nutrition</span>
          </h2>
          <p style={{ color: "#64748B", fontSize: 18 }}>Built for real people with real health goals</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {features.map((f) => (
            <Card key={f.title} style={{ padding: 24 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: f.color + "18",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  marginBottom: 16,
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "60px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#0F172A", letterSpacing: "-1px" }}>How It Works</h2>
            <p style={{ color: "#64748B", fontSize: 16, marginTop: 8 }}>Four simple steps to transform your nutrition</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 24 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #22C55E18, #0EA5E918)",
                    border: "2px solid #22C55E33",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: 900,
                    color: "#22C55E",
                    margin: "0 auto 16px",
                  }}
                >
                  {s.n}
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>{s.title}</h4>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "60px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#0F172A", letterSpacing: "-1px" }}>Loved by users</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {testimonials.map((t) => (
            <Card key={t.name} style={{ padding: 24 }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                {"⭐".repeat(t.stars)}
              </div>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6, marginBottom: 16 }}>"{t.msg}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #22C55E, #0EA5E9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#64748B" }}>{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "60px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#0F172A", letterSpacing: "-1px" }}>Simple Pricing</h2>
            <p style={{ color: "#64748B", marginTop: 8 }}>No hidden fees. Cancel anytime.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 20 }}>
            {pricing.map((p) => (
              <div
                key={p.plan}
                style={{
                  padding: 28,
                  borderRadius: 20,
                  border: p.highlight ? "2px solid #22C55E" : "1.5px solid #E2E8F0",
                  background: p.highlight ? "linear-gradient(135deg, #22C55E08, #0EA5E908)" : "#fff",
                  position: "relative",
                  boxShadow: p.highlight ? "0 8px 32px rgba(34,197,94,0.15)" : "none",
                }}
              >
                {p.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "linear-gradient(135deg, #22C55E, #16A34A)",
                      color: "#fff",
                      padding: "4px 16px",
                      borderRadius: 99,
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>{p.plan}</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#22C55E", marginBottom: 4 }}>{p.price}</div>
                <div style={{ fontSize: 12, color: "#64748B", marginBottom: 20 }}>{p.period}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ fontSize: 13, color: "#374151", display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ color: "#22C55E", fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate("signup")}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: 10,
                    border: p.highlight ? "none" : "1.5px solid #E2E8F0",
                    background: p.highlight ? "linear-gradient(135deg, #22C55E, #16A34A)" : "transparent",
                    color: p.highlight ? "#fff" : "#0F172A",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 24px", borderTop: "1px solid #E2E8F0", textAlign: "center", color: "#64748B", fontSize: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 16 }}>
          <span style={{ fontSize: 20 }}>🌿</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#0F172A" }}>
            Bite<span style={{ color: "#22C55E" }}>Count</span>
          </span>
        </div>
        <p>© 2025 BiteCount. AI-Powered Personalized Nutrition Intelligence.</p>
        <p style={{ marginTop: 8, color: "#94A3B8", fontSize: 12 }}>Made with 💚 for healthier lives</p>
      </footer>
    </div>
  );
};

// ─── Auth Pages ────────────────────────────────────────────────────────────────
const AuthPage = ({ type, onNavigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const isLogin = type === "login";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F0FDF4 0%, #F8FAFC 50%, #EFF6FF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 420 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <button onClick={() => onNavigate("landing")} style={{ background: "none", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "linear-gradient(135deg, #22C55E, #0EA5E9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              🌿
            </div>
            <span style={{ fontSize: 22, fontWeight: 900, color: "#0F172A" }}>
              Bite<span style={{ color: "#22C55E" }}>Count</span>
            </span>
          </button>
          <p style={{ color: "#64748B", fontSize: 14, marginTop: 8 }}>{isLogin ? "Welcome back! Sign in to your account" : "Create your free account today"}</p>
        </div>

        <Card style={{ padding: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0F172A", marginBottom: 24 }}>{isLogin ? "Sign In" : "Create Account"}</h2>

          {!isLogin && (
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Full Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nandan Chakraborty"
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: 10,
                  border: "1.5px solid #E2E8F0",
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
                onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
              />
            </div>
          )}

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nandan@example.com"
              style={{
                width: "100%",
                padding: "11px 14px",
                borderRadius: 10,
                border: "1.5px solid #E2E8F0",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
              onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "11px 14px",
                borderRadius: 10,
                border: "1.5px solid #E2E8F0",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
              onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
            />
          </div>

          <button
            onClick={() => onNavigate("dashboard")}
            style={{
              width: "100%",
              padding: "13px",
              borderRadius: 10,
              border: "none",
              background: "linear-gradient(135deg, #22C55E, #16A34A)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(34,197,94,0.35)",
              marginBottom: 16,
              fontFamily: "inherit",
            }}
          >
            {isLogin ? "Sign In →" : "Create Account →"}
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
            <span style={{ fontSize: 12, color: "#94A3B8" }}>or continue with</span>
            <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
          </div>

          <button
            style={{
              width: "100%",
              padding: "11px",
              borderRadius: 10,
              border: "1.5px solid #E2E8F0",
              background: "#fff",
              color: "#374151",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              fontFamily: "inherit",
            }}
          >
            <span style={{ fontSize: 18 }}>G</span> Continue with Google
          </button>

          <p style={{ textAlign: "center", fontSize: 13, color: "#64748B", marginTop: 20 }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => onNavigate(isLogin ? "signup" : "login")}
              style={{ color: "#22C55E", fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
            >
              {isLogin ? "Sign up free" : "Sign in"}
            </button>
          </p>
        </Card>
      </div>
    </div>
  );
};

// ─── App Shell (Dashboard Layout) ─────────────────────────────────────────────
const AppShell = ({ activePage, onNavigate, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "home" },
    { id: "foodlog", label: "Food Log", icon: "food" },
    { id: "nutrition", label: "Nutrition Analysis", icon: "chart" },
    { id: "deficiency", label: "Deficiency Detection", icon: "warning" },
    { id: "recommendations", label: "AI Recommendations", icon: "brain" },
    { id: "mealplanner", label: "Meal Planner", icon: "calendar" },
    { id: "chat", label: "AI Assistant", icon: "chat" },
    { id: "reports", label: "Health Reports", icon: "report" },
    { id: "profile", label: "Profile", icon: "user" },
    { id: "settings", label: "Settings", icon: "settings" },
    { id: "admin", label: "Admin", icon: "admin" },
  ];

  const bg = darkMode ? "#0F172A" : "#F8FAFC";
  const cardBg = darkMode ? "#1E293B" : "#FFFFFF";
  const textColor = darkMode ? "#F1F5F9" : "#0F172A";
  const mutedColor = darkMode ? "#94A3B8" : "#64748B";
  const borderColor = darkMode ? "#334155" : "#E2E8F0";
  const sidebarBg = darkMode ? "#1E293B" : "#FFFFFF";

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: bg, fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarOpen ? 240 : 64,
          background: sidebarBg,
          borderRight: `1px solid ${borderColor}`,
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
          overflow: "hidden",
          flexShrink: 0,
          zIndex: 10,
        }}
      >
        {/* Sidebar Header */}
        <div style={{ padding: "16px 12px", borderBottom: `1px solid ${borderColor}`, display: "flex", alignItems: "center", gap: 10, minHeight: 64 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #22C55E, #0EA5E9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              flexShrink: 0,
            }}
          >
            🌿
          </div>
          {sidebarOpen && (
            <span style={{ fontSize: 17, fontWeight: 800, color: textColor, whiteSpace: "nowrap" }}>
              Bite<span style={{ color: "#22C55E" }}>Count</span>
            </span>
          )}
        </div>

        {/* Nav Items */}
        <nav style={{ flex: 1, padding: "12px 8px", overflowY: "auto", overflowX: "hidden" }}>
          {navItems.map((item) => {
            const active = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 10px",
                  borderRadius: 10,
                  border: "none",
                  background: active ? "#22C55E18" : "transparent",
                  color: active ? "#22C55E" : mutedColor,
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                  cursor: "pointer",
                  marginBottom: 2,
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  transition: "all 0.15s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = darkMode ? "#ffffff08" : "#F1F5F9"; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ flexShrink: 0, opacity: active ? 1 : 0.7 }}>
                  <Icon d={icons[item.icon]} size={18} />
                </div>
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div style={{ padding: "12px 8px", borderTop: `1px solid ${borderColor}` }}>
          <button
            onClick={() => onNavigate("landing")}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 10px",
              borderRadius: 10,
              border: "none",
              background: "transparent",
              color: mutedColor,
              fontSize: 14,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <Icon d={icons.logout} size={18} />
            {sidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top Navbar */}
        <header
          style={{
            height: 64,
            background: cardBg,
            borderBottom: `1px solid ${borderColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: mutedColor, display: "flex" }}
            >
              <Icon d={icons.menu} size={20} />
            </button>
            <div>
              <span style={{ fontSize: 16, fontWeight: 700, color: textColor }}>
                {navItems.find((n) => n.id === activePage)?.label || "Dashboard"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Health Score Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 99, background: "#22C55E18", border: "1px solid #22C55E33" }}>
              <span style={{ fontSize: 12 }}>🎯</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#16A34A" }}>Health Score: 74</span>
            </div>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: mutedColor, display: "flex", position: "relative" }}>
              <Icon d={icons.bell} size={20} />
              <span style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, borderRadius: "50%", background: "#EF4444" }} />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{ background: "none", border: "none", cursor: "pointer", color: mutedColor, display: "flex" }}
            >
              <Icon d={darkMode ? icons.sun : icons.moon} size={20} />
            </button>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #22C55E, #0EA5E9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                cursor: "pointer",
              }}
            >
              NC
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, overflowY: "auto", padding: 24, background: bg }}>
          {children({ darkMode, textColor, mutedColor, borderColor, cardBg, bg })}
        </main>
      </div>
    </div>
  );
};

// ─── Dashboard Page ────────────────────────────────────────────────────────────
const DashboardPage = ({ textColor, mutedColor, borderColor, cardBg, bg, darkMode }) => {
  const macros = [
    { label: "Calories", val: 1840, max: 2200, unit: "kcal", color: "#22C55E", icon: "🔥" },
    { label: "Protein", val: 98, max: 140, unit: "g", color: "#0EA5E9", icon: "💪" },
    { label: "Carbs", val: 210, max: 275, unit: "g", color: "#F59E0B", icon: "🌾" },
    { label: "Fat", val: 62, max: 73, unit: "g", color: "#8B5CF6", icon: "🥑" },
    { label: "Water", val: 1.8, max: 2.5, unit: "L", color: "#06B6D4", icon: "💧" },
    { label: "Fiber", val: 18, max: 25, unit: "g", color: "#10B981", icon: "🌿" },
  ];

  return (
    <div>
      {/* Welcome Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #22C55E, #0EA5E9)",
          borderRadius: 20,
          padding: "24px 28px",
          marginBottom: 24,
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", right: -20, top: -20, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
        <div style={{ position: "absolute", right: 40, bottom: -30, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
        <div>
          <p style={{ fontSize: 13, opacity: 0.85, marginBottom: 4 }}>Good morning 🌅</p>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Hey Nandan, you're doing great! 💪</h2>
          <p style={{ fontSize: 14, opacity: 0.85 }}>You've logged 3 meals today. 360 calories remaining.</p>
        </div>
        <div style={{ textAlign: "center", position: "relative" }}>
          <div style={{ fontSize: 40, fontWeight: 900 }}>74</div>
          <div style={{ fontSize: 12, opacity: 0.9 }}>Health Score</div>
        </div>
      </div>

      {/* Macro Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
        {macros.map((m) => {
          const pct = Math.round((m.val / m.max) * 100);
          return (
            <Card key={m.label} style={{ padding: "18px 20px", background: cardBg }} hover dark={darkMode}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <p style={{ fontSize: 12, color: mutedColor, fontWeight: 600, marginBottom: 2 }}>{m.label}</p>
                  <p style={{ fontSize: 22, fontWeight: 800, color: textColor }}>
                    {m.val}
                    <span style={{ fontSize: 12, color: mutedColor, fontWeight: 500 }}> {m.unit}</span>
                  </p>
                </div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: m.color + "18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                  }}
                >
                  {m.icon}
                </div>
              </div>
              <ProgressBar value={m.val} max={m.max} color={m.color} height={6} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                <span style={{ fontSize: 11, color: mutedColor }}>{pct}% of goal</span>
                <span style={{ fontSize: 11, color: mutedColor }}>
                  {m.max - m.val} {m.unit} left
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20, marginBottom: 24 }}>
        {/* Weekly Calories Chart */}
        <Card style={{ padding: 24, background: cardBg }} hover={false} dark={darkMode}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor }}>Weekly Calories</h3>
            <Badge color="#22C55E">This Week</Badge>
          </div>
          <p style={{ fontSize: 12, color: mutedColor, marginBottom: 16 }}>Average: 2,041 kcal/day</p>
          <MiniBarChart data={weeklyData} dataKey="calories" color="#22C55E" height={140} />
        </Card>

        {/* Macro Distribution */}
        <Card style={{ padding: 24, background: cardBg }} hover={false} dark={darkMode}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 4 }}>Today's Macros</h3>
          <p style={{ fontSize: 12, color: mutedColor, marginBottom: 20 }}>Distribution breakdown</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <CircularProgress value={98} max={140} size={72} stroke={7} color="#0EA5E9" label="Protein" sublabel="98/140g" />
            <CircularProgress value={210} max={275} size={72} stroke={7} color="#F59E0B" label="Carbs" sublabel="210/275g" />
            <CircularProgress value={62} max={73} size={72} stroke={7} color="#8B5CF6" label="Fat" sublabel="62/73g" />
          </div>
        </Card>
      </div>

      {/* Bottom Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Today's Alerts */}
        <Card style={{ padding: 24, background: cardBg }} hover={false} dark={darkMode}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 16 }}>⚠️ Nutrition Alerts</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { msg: "Iron critically low — 35% of RDI", sev: "red" },
              { msg: "Zinc deficiency detected — 30% of RDI", sev: "red" },
              { msg: "Vitamin D below target — 42%", sev: "yellow" },
              { msg: "Calcium needs attention — 55%", sev: "yellow" },
            ].map((a) => (
              <div
                key={a.msg}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 10,
                  background: a.sev === "red" ? "#FEF2F2" : "#FFFBEB",
                  border: `1px solid ${a.sev === "red" ? "#FECACA" : "#FDE68A"}`,
                }}
              >
                <span style={{ fontSize: 14 }}>{a.sev === "red" ? "🔴" : "🟡"}</span>
                <span style={{ fontSize: 13, color: a.sev === "red" ? "#DC2626" : "#B45309", fontWeight: 500 }}>{a.msg}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick AI Suggestions */}
        <Card style={{ padding: 24, background: cardBg }} hover={false} dark={darkMode}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 16 }}>🧠 AI Suggestions for Tonight</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { food: "🥬 Spinach Salad", reason: "Address iron deficiency" },
              { food: "🐟 Grilled Salmon", reason: "Boost Vitamin D" },
              { food: "🫙 Greek Yogurt", reason: "Improve calcium levels" },
            ].map((s) => (
              <div
                key={s.food}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 12px",
                  borderRadius: 10,
                  background: "#22C55E08",
                  border: "1px solid #22C55E22",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: textColor }}>{s.food}</span>
                <span style={{ fontSize: 11, color: "#16A34A", fontWeight: 600 }}>{s.reason}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// ─── Food Log Page ─────────────────────────────────────────────────────────────
const FoodLogPage = ({ textColor, mutedColor, borderColor, cardBg, bg, darkMode }) => {
  const [search, setSearch] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("Breakfast");
  const [loggedFoods, setLoggedFoods] = useState([
    { meal: "Breakfast", food: foodDatabase[8], qty: 1 },
    { meal: "Breakfast", food: foodDatabase[10], qty: 1 },
    { meal: "Lunch", food: foodDatabase[1], qty: 1.5 },
    { meal: "Lunch", food: foodDatabase[0], qty: 1 },
    { meal: "Dinner", food: foodDatabase[4], qty: 1 },
  ]);

  const filtered = search ? foodDatabase.filter((f) => f.name.toLowerCase().includes(search.toLowerCase())) : foodDatabase;
  const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  const mealTotals = (meal) => {
    const items = loggedFoods.filter((l) => l.meal === meal);
    return {
      cal: items.reduce((s, i) => s + i.food.calories * i.qty, 0),
      protein: items.reduce((s, i) => s + i.food.protein * i.qty, 0),
    };
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20 }}>
      {/* Left */}
      <div>
        {/* Meal Sections */}
        {meals.map((meal) => {
          const items = loggedFoods.filter((l) => l.meal === meal);
          const totals = mealTotals(meal);
          return (
            <Card key={meal} style={{ padding: 20, marginBottom: 16, background: cardBg }} hover={false} dark={darkMode}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor }}>{meal === "Breakfast" ? "🌅" : meal === "Lunch" ? "☀️" : meal === "Dinner" ? "🌙" : "🍎"} {meal}</h3>
                  <p style={{ fontSize: 12, color: mutedColor }}>
                    {Math.round(totals.cal)} kcal · {Math.round(totals.protein)}g protein
                  </p>
                </div>
                <button
                  onClick={() => setSelectedMeal(meal)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: 8,
                    border: "1.5px dashed #22C55E",
                    background: "transparent",
                    color: "#22C55E",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  <Icon d={icons.plus} size={14} />
                  Add Food
                </button>
              </div>
              {items.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {items.map((l, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderRadius: 8,
                        background: darkMode ? "#ffffff08" : "#F8FAFC",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 20 }}>{l.food.icon}</span>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 600, color: textColor }}>{l.food.name}</p>
                          <p style={{ fontSize: 11, color: mutedColor }}>
                            {l.qty} serving · P: {(l.food.protein * l.qty).toFixed(1)}g · C: {(l.food.carbs * l.qty).toFixed(1)}g · F: {(l.food.fat * l.qty).toFixed(1)}g
                          </p>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#22C55E" }}>{Math.round(l.food.calories * l.qty)}</p>
                        <p style={{ fontSize: 10, color: mutedColor }}>kcal</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {items.length === 0 && (
                <div style={{ padding: "20px", textAlign: "center", color: mutedColor, fontSize: 13, border: "1.5px dashed #E2E8F0", borderRadius: 10 }}>
                  No foods logged yet. Click "Add Food" to start.
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* Right - Food Search */}
      <div>
        <Card style={{ padding: 20, background: cardBg, position: "sticky", top: 0 }} hover={false} dark={darkMode}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 12 }}>
            🔍 Add to {selectedMeal}
          </h3>
          <div style={{ position: "relative", marginBottom: 16 }}>
            <div style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: mutedColor }}>
              <Icon d={icons.search} size={16} />
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search foods..."
              style={{
                width: "100%",
                padding: "10px 10px 10px 34px",
                borderRadius: 10,
                border: `1.5px solid ${borderColor}`,
                fontSize: 14,
                background: darkMode ? "#0F172A" : "#F8FAFC",
                color: textColor,
                outline: "none",
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 500, overflowY: "auto" }}>
            {filtered.map((food) => (
              <button
                key={food.name}
                onClick={() => {
                  setLoggedFoods([...loggedFoods, { meal: selectedMeal, food, qty: 1 }]);
                  setSearch("");
                }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: `1px solid ${borderColor}`,
                  background: darkMode ? "#ffffff06" : "#FAFAFA",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.background = "#22C55E08"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.background = darkMode ? "#ffffff06" : "#FAFAFA"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>{food.icon}</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: textColor }}>{food.name}</p>
                    <p style={{ fontSize: 11, color: mutedColor }}>P:{food.protein}g C:{food.carbs}g F:{food.fat}g</p>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#22C55E" }}>{food.calories}</p>
                  <p style={{ fontSize: 10, color: mutedColor }}>kcal</p>
                </div>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// ─── Nutrition Analysis Page ───────────────────────────────────────────────────
const NutritionPage = ({ textColor, mutedColor, borderColor, cardBg, darkMode }) => {
  const nutrients = [
    { name: "Calories", consumed: 1840, target: 2200, unit: "kcal", color: "#22C55E", icon: "🔥" },
    { name: "Protein", consumed: 98, target: 140, unit: "g", color: "#0EA5E9", icon: "💪" },
    { name: "Carbohydrates", consumed: 210, target: 275, unit: "g", color: "#F59E0B", icon: "🌾" },
    { name: "Fat", consumed: 62, target: 73, unit: "g", color: "#8B5CF6", icon: "🥑" },
    { name: "Fiber", consumed: 18, target: 25, unit: "g", color: "#10B981", icon: "🌿" },
    { name: "Water", consumed: 1.8, target: 2.5, unit: "L", color: "#06B6D4", icon: "💧" },
    { name: "Vitamin C", consumed: 65, target: 90, unit: "mg", color: "#F97316", icon: "🍊" },
    { name: "Vitamin A", consumed: 520, target: 900, unit: "μg", color: "#EF4444", icon: "🥕" },
  ];

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: textColor, marginBottom: 4 }}>Nutrition Analysis</h2>
        <p style={{ color: mutedColor, fontSize: 14 }}>Today's detailed nutritional breakdown — Friday, May 29</p>
      </div>

      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16, marginBottom: 24 }}>
        {[
          { label: "Nutrition Score", val: "74/100", color: "#22C55E", icon: "🎯" },
          { label: "Meals Logged", val: "3 / 4", color: "#0EA5E9", icon: "🍽️" },
          { label: "Deficiencies", val: "4 Found", color: "#EF4444", icon: "⚠️" },
          { label: "Calories Left", val: "360 kcal", color: "#F59E0B", icon: "⚡" },
        ].map((c) => (
          <Card key={c.label} style={{ padding: "16px 18px", background: cardBg }} dark={darkMode}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>{c.icon}</div>
            <p style={{ fontSize: 22, fontWeight: 800, color: c.color }}>{c.val}</p>
            <p style={{ fontSize: 12, color: mutedColor, fontWeight: 600 }}>{c.label}</p>
          </Card>
        ))}
      </div>

      {/* Nutrient Progress Bars */}
      <Card style={{ padding: 24, background: cardBg, marginBottom: 20 }} hover={false} dark={darkMode}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 20 }}>Nutrient Progress</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 32px" }}>
          {nutrients.map((n) => {
            const pct = Math.round((n.consumed / n.target) * 100);
            const remaining = n.target - n.consumed;
            return (
              <div key={n.name}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span>{n.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: textColor }}>{n.name}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: mutedColor }}>
                      {n.consumed} / {n.target} {n.unit}
                    </span>
                    <Badge color={pct >= 80 ? "#22C55E" : pct >= 50 ? "#F59E0B" : "#EF4444"}>{pct}%</Badge>
                  </div>
                </div>
                <ProgressBar value={n.consumed} max={n.target} color={n.color} height={8} />
                <p style={{ fontSize: 11, color: mutedColor, marginTop: 4 }}>
                  {remaining > 0 ? `${remaining} ${n.unit} remaining` : `${Math.abs(remaining)} ${n.unit} over target`}
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Weekly Trend Chart */}
      <Card style={{ padding: 24, background: cardBg }} hover={false} dark={darkMode}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 4 }}>Weekly Nutrition Trend</h3>
        <p style={{ fontSize: 12, color: mutedColor, marginBottom: 16 }}>7-day calorie and protein tracking</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#22C55E", marginBottom: 8 }}>Calories (kcal)</p>
            <MiniBarChart data={weeklyData} dataKey="calories" color="#22C55E" height={120} />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#0EA5E9", marginBottom: 8 }}>Protein (g)</p>
            <MiniBarChart data={weeklyData} dataKey="protein" color="#0EA5E9" height={120} />
          </div>
        </div>
      </Card>
    </div>
  );
};

// ─── Deficiency Detection Page ─────────────────────────────────────────────────
const DeficiencyPage = ({ textColor, mutedColor, borderColor, cardBg, darkMode }) => (
  <div>
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: textColor, marginBottom: 4 }}>Deficiency Detection</h2>
      <p style={{ color: mutedColor, fontSize: 14 }}>AI-powered nutrient gap analysis based on your food logs</p>
    </div>

    {/* Alert Banner */}
    <div
      style={{
        padding: "16px 20px",
        borderRadius: 12,
        background: "#FEF2F2",
        border: "1px solid #FECACA",
        display: "flex",
        gap: 12,
        alignItems: "center",
        marginBottom: 24,
      }}
    >
      <span style={{ fontSize: 20 }}>⚠️</span>
      <div>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#DC2626", marginBottom: 2 }}>4 Deficiencies Detected</p>
        <p style={{ fontSize: 13, color: "#EF4444" }}>Iron and Zinc are critically low. Address these with dietary changes immediately.</p>
      </div>
    </div>

    {/* Deficiency Cards */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
      {deficiencies.map((d) => {
        const barColor = d.severity === "red" ? "#EF4444" : d.severity === "yellow" ? "#F59E0B" : "#22C55E";
        const bgColor = d.severity === "red" ? "#FEF2F2" : d.severity === "yellow" ? "#FFFBEB" : "#F0FDF4";
        const borderC = d.severity === "red" ? "#FECACA" : d.severity === "yellow" ? "#FDE68A" : "#BBF7D0";
        return (
          <div key={d.nutrient} style={{ padding: 20, borderRadius: 16, background: bgColor, border: `1.5px solid ${borderC}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 2 }}>{d.nutrient}</p>
                <p style={{ fontSize: 12, color: "#64748B" }}>
                  {d.current} / {d.rdi} RDI
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                <span style={{ fontSize: 20 }}>{d.emoji}</span>
                <Badge color={barColor}>{d.status.toUpperCase()}</Badge>
              </div>
            </div>
            <ProgressBar value={d.level} max={100} color={barColor} height={10} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              <span style={{ fontSize: 11, color: "#64748B" }}>{d.level}% of RDI</span>
              <span style={{ fontSize: 11, color: "#64748B" }}>{d.severity === "red" ? "Critical" : d.severity === "yellow" ? "Moderate" : "Optimal"}</span>
            </div>
          </div>
        );
      })}
    </div>

    {/* Recommendations */}
    <Card style={{ padding: 24, background: cardBg, marginTop: 20 }} hover={false} dark={darkMode}>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 16 }}>💡 How to Fix These Deficiencies</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          { nut: "Iron", fix: "Add spinach, lentils, red meat, fortified cereals", tip: "Pair with Vitamin C for 3x better absorption" },
          { nut: "Zinc", fix: "Include oysters, pumpkin seeds, chickpeas, beef", tip: "Avoid high-fiber foods with zinc-rich meals" },
          { nut: "Vitamin D", fix: "Eat salmon, tuna, egg yolks, fortified milk", tip: "15-20 min sun exposure daily helps too" },
          { nut: "Calcium", fix: "Greek yogurt, cheese, tofu, almonds, broccoli", tip: "Spread calcium intake throughout the day" },
        ].map((r) => (
          <div key={r.nut} style={{ padding: 14, borderRadius: 10, background: darkMode ? "#ffffff08" : "#F8FAFC", border: `1px solid ${borderColor}` }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#22C55E", marginBottom: 4 }}>Fix {r.nut} Deficiency</p>
            <p style={{ fontSize: 12, color: textColor, marginBottom: 6 }}>{r.fix}</p>
            <p style={{ fontSize: 11, color: mutedColor, fontStyle: "italic" }}>💡 {r.tip}</p>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

// ─── AI Recommendations Page ───────────────────────────────────────────────────
const RecommendationsPage = ({ textColor, mutedColor, borderColor, cardBg, darkMode }) => (
  <div>
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: textColor, marginBottom: 4 }}>AI Recommendations</h2>
      <p style={{ color: mutedColor, fontSize: 14 }}>Personalized food recommendations based on your deficiencies and health profile</p>
    </div>

    {/* Context Banner */}
    <div
      style={{
        background: "linear-gradient(135deg, #22C55E08, #0EA5E908)",
        border: "1.5px solid #22C55E33",
        borderRadius: 16,
        padding: "16px 20px",
        marginBottom: 24,
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 14 }}>🔴</span>
        <span style={{ fontSize: 13, color: textColor, fontWeight: 500 }}>Iron Deficiency Detected</span>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 14 }}>🔴</span>
        <span style={{ fontSize: 13, color: textColor, fontWeight: 500 }}>Zinc Critically Low</span>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 14 }}>💪</span>
        <span style={{ fontSize: 13, color: textColor, fontWeight: 500 }}>Protein Below Target (70%)</span>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ fontSize: 14 }}>⚡</span>
        <span style={{ fontSize: 13, color: textColor, fontWeight: 500 }}>360 Calories Remaining</span>
      </div>
    </div>

    {/* Recommended Foods */}
    <h3 style={{ fontSize: 17, fontWeight: 700, color: textColor, marginBottom: 16 }}>✅ Recommended for Tonight</h3>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16, marginBottom: 24 }}>
      {aiRecommendations.map((r) => (
        <Card key={r.food} style={{ padding: 20, background: cardBg, border: r.priority === "high" ? "1.5px solid #22C55E44" : undefined }} dark={darkMode}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "#22C55E18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>
                {r.icon}
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: textColor }}>{r.food}</p>
                <p style={{ fontSize: 12, color: mutedColor }}>{r.qty} · {r.calories} kcal</p>
              </div>
            </div>
            <Badge color={r.priority === "high" ? "#EF4444" : "#F59E0B"}>
              {r.priority === "high" ? "HIGH PRIORITY" : "SUGGESTED"}
            </Badge>
          </div>
          <div style={{ padding: "10px 12px", borderRadius: 8, background: darkMode ? "#ffffff08" : "#F0FDF4", border: "1px solid #22C55E22" }}>
            <p style={{ fontSize: 12, color: darkMode ? "#86EFAC" : "#16A34A", lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>Why: </span>{r.reason}
            </p>
          </div>
        </Card>
      ))}
    </div>

    {/* Foods to Avoid */}
    <h3 style={{ fontSize: 17, fontWeight: 700, color: textColor, marginBottom: 16 }}>🚫 Foods to Avoid Today</h3>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {avoidFoods.map((a) => (
        <div
          key={a.food}
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            padding: "14px 18px",
            borderRadius: 12,
            background: "#FEF2F2",
            border: "1px solid #FECACA",
          }}
        >
          <span style={{ fontSize: 24 }}>{a.icon}</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#DC2626" }}>{a.food}</p>
            <p style={{ fontSize: 12, color: "#EF4444" }}>{a.reason}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── AI Chat Page ──────────────────────────────────────────────────────────────
const ChatPage = ({ textColor, mutedColor, borderColor, cardBg, darkMode }) => {
  const [messages, setMessages] = useState(chatHistory);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const scrollToBottom = () => endRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", message: input };
    setMessages((prev) => [...prev, userMsg]);
    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      const systemPrompt = `You are BiteCount AI, a friendly, expert nutrition assistant. The user has these deficiencies: Iron (35% RDI), Zinc (30% RDI), Vitamin D (42% RDI), Calcium (55% RDI). Their daily calories are 1840/2200, protein 98/140g. They have no health conditions. Provide short, actionable, evidence-based nutrition advice. Use emojis. Keep responses under 120 words.`;

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: "user", content: userInput }],
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "I'm here to help with your nutrition goals! 🌿";
      setMessages((prev) => [...prev, { role: "ai", message: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "ai", message: "Sorry, I'm having trouble connecting right now. Please try again in a moment! 🌿" }]);
    }
    setLoading(false);
  };

  const suggestions = ["What should I eat tonight?", "Why am I low in iron?", "Give me a high protein meal plan", "Foods good for Vitamin D"];

  return (
    <div style={{ height: "calc(100vh - 160px)", display: "flex", flexDirection: "column" }}>
      {/* Chat Header */}
      <Card style={{ padding: "16px 20px", background: cardBg, marginBottom: 12, display: "flex", gap: 14, alignItems: "center" }} hover={false} dark={darkMode}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #22C55E, #0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
          🌿
        </div>
        <div>
          <p style={{ fontSize: 15, fontWeight: 800, color: textColor }}>BiteCount AI</p>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
            <span style={{ fontSize: 12, color: "#22C55E", fontWeight: 600 }}>Online · Nutrition Expert</span>
          </div>
        </div>
      </Card>

      {/* Suggestions */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => { setInput(s); }}
            style={{
              padding: "6px 14px",
              borderRadius: 99,
              border: `1px solid ${borderColor}`,
              background: darkMode ? "#ffffff08" : "#F8FAFC",
              color: mutedColor,
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.color = "#22C55E"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = borderColor; e.currentTarget.style.color = mutedColor; }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 16, padding: "8px 0" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", gap: 10, justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
            {msg.role === "ai" && (
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #22C55E, #0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                🌿
              </div>
            )}
            <div
              style={{
                maxWidth: "72%",
                padding: "12px 16px",
                borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                background: msg.role === "user" ? "linear-gradient(135deg, #22C55E, #16A34A)" : cardBg,
                color: msg.role === "user" ? "#fff" : textColor,
                fontSize: 14,
                lineHeight: 1.6,
                border: msg.role === "ai" ? `1px solid ${borderColor}` : "none",
                whiteSpace: "pre-wrap",
                boxShadow: msg.role === "user" ? "0 4px 12px rgba(34,197,94,0.3)" : "none",
              }}
            >
              {msg.message}
            </div>
            {msg.role === "user" && (
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #0EA5E9, #6366F1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                NC
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #22C55E, #0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
              🌿
            </div>
            <div style={{ padding: "12px 16px", borderRadius: "16px 16px 16px 4px", background: cardBg, border: `1px solid ${borderColor}`, display: "flex", gap: 6 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", animation: `bounce 1.2s infinite ${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
          placeholder="Ask BiteCount AI anything about nutrition..."
          style={{
            flex: 1,
            padding: "13px 16px",
            borderRadius: 12,
            border: `1.5px solid ${borderColor}`,
            fontSize: 14,
            background: cardBg,
            color: textColor,
            outline: "none",
            fontFamily: "inherit",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
          onBlur={(e) => (e.target.style.borderColor = borderColor)}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{
            padding: "13px 20px",
            borderRadius: 12,
            border: "none",
            background: loading || !input.trim() ? "#E2E8F0" : "linear-gradient(135deg, #22C55E, #16A34A)",
            color: loading || !input.trim() ? "#94A3B8" : "#fff",
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "inherit",
          }}
        >
          <Icon d={icons.send} size={16} />
          Send
        </button>
      </div>
      <style>{`@keyframes bounce { 0%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-6px); } }`}</style>
    </div>
  );
};

// ─── Meal Planner Page ─────────────────────────────────────────────────────────
const MealPlannerPage = ({ textColor, mutedColor, borderColor, cardBg, darkMode }) => {
  const mealIcons = { breakfast: "🌅", lunch: "☀️", dinner: "🌙", snacks: "🍎" };
  const mealColors = { breakfast: "#F59E0B", lunch: "#0EA5E9", dinner: "#8B5CF6", snacks: "#22C55E" };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: textColor, marginBottom: 4 }}>Meal Planner</h2>
          <p style={{ color: mutedColor, fontSize: 14 }}>AI-generated meal plan targeting your deficiencies — Friday, May 29</p>
        </div>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: 10,
            border: "none",
            background: "linear-gradient(135deg, #22C55E, #16A34A)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: "0 4px 12px rgba(34,197,94,0.3)",
          }}
        >
          🔄 Regenerate Plan
        </button>
      </div>

      {/* Daily Summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Total Calories", val: "1,805", color: "#22C55E" },
          { label: "Total Protein", val: "145.5g", color: "#0EA5E9" },
          { label: "Total Carbs", val: "220g", color: "#F59E0B" },
          { label: "Total Fat", val: "35g", color: "#8B5CF6" },
        ].map((s) => (
          <Card key={s.label} style={{ padding: "14px 16px", background: cardBg, textAlign: "center" }} dark={darkMode}>
            <p style={{ fontSize: 20, fontWeight: 800, color: s.color }}>{s.val}</p>
            <p style={{ fontSize: 12, color: mutedColor, fontWeight: 600 }}>{s.label}</p>
          </Card>
        ))}
      </div>

      {/* Meal Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {Object.entries(mealPlan).map(([mealKey, meal]) => (
          <Card key={mealKey} style={{ padding: 24, background: cardBg }} hover={false} dark={darkMode}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontSize: 20 }}>{mealIcons[mealKey]}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: mealColors[mealKey] }}>{mealKey}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: textColor }}>{meal.name}</h3>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: 18, fontWeight: 800, color: mealColors[mealKey] }}>{meal.total.cal} kcal</p>
                <p style={{ fontSize: 12, color: mutedColor }}>{meal.total.protein}g protein</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
              {meal.foods.map((f) => (
                <div
                  key={f.item}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 12px",
                    borderRadius: 8,
                    background: darkMode ? "#ffffff06" : "#F8FAFC",
                  }}
                >
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: textColor }}>{f.item}</p>
                    <p style={{ fontSize: 11, color: mutedColor }}>{f.qty}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: mealColors[mealKey] }}>{f.cal} kcal</p>
                    <p style={{ fontSize: 11, color: mutedColor }}>{f.protein}g P</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: "10px 12px", borderRadius: 8, background: mealColors[mealKey] + "12", border: `1px solid ${mealColors[mealKey]}33` }}>
              <p style={{ fontSize: 12, color: darkMode ? "#fff" : "#374151", lineHeight: 1.5 }}>
                <span style={{ fontWeight: 700, color: mealColors[mealKey] }}>💡 Why: </span>{meal.reason}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── Profile Page ──────────────────────────────────────────────────────────────
const ProfilePage = ({ textColor, mutedColor, borderColor, cardBg, darkMode }) => {
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(165);
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState("female");
  const [activity, setActivity] = useState("moderate");
  const [conditions, setConditions] = useState([]);

  const bmi = weight / ((height / 100) * (height / 100));
  const bmr = gender === "female" ? 10 * weight + 6.25 * height - 5 * age - 161 : 10 * weight + 6.25 * height - 5 * age + 5;
  const activityMult = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, veryactive: 1.9 };
  const tdee = bmr * (activityMult[activity] || 1.55);
  const bmiCat = bmi < 18.5 ? { label: "Underweight", color: "#0EA5E9" } : bmi < 25 ? { label: "Normal Weight", color: "#22C55E" } : bmi < 30 ? { label: "Overweight", color: "#F59E0B" } : { label: "Obese", color: "#EF4444" };

  const healthConditions = ["Diabetes", "Hypertension", "Heart Disease", "Obesity", "Thyroid", "Kidney Disease"];
  const toggleCondition = (c) => setConditions((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));

  const Input = ({ label, value, onChange, type = "number", options }) => (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: mutedColor, marginBottom: 6 }}>{label}</label>
      {options ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${borderColor}`, fontSize: 14, background: cardBg, color: textColor, outline: "none", fontFamily: "inherit" }}
        >
          {options.map((o) => <option key={o.val} value={o.val}>{o.label}</option>)}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(type === "number" ? parseFloat(e.target.value) : e.target.value)}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${borderColor}`, fontSize: 14, background: cardBg, color: textColor, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
          onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
          onBlur={(e) => (e.target.style.borderColor = borderColor)}
        />
      )}
    </div>
  );

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }}>
      {/* Left: Form */}
      <div>
        <Card style={{ padding: 28, background: cardBg, marginBottom: 20 }} hover={false} dark={darkMode}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 20 }}>Personal Information</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ gridColumn: "1/-1" }}>
              <Input label="Full Name" value="Nandan Chakraborty" onChange={() => {}} type="text" />
            </div>
            <Input label="Age" value={age} onChange={setAge} />
            <Input label="Gender" value={gender} onChange={setGender} options={[{ val: "female", label: "Female" }, { val: "male", label: "Male" }]} />
            <Input label="Weight (kg)" value={weight} onChange={setWeight} />
            <Input label="Height (cm)" value={height} onChange={setHeight} />
            <div style={{ gridColumn: "1/-1" }}>
              <Input label="Activity Level" value={activity} onChange={setActivity} options={[
                { val: "sedentary", label: "Sedentary (little or no exercise)" },
                { val: "light", label: "Light (1-3 days/week)" },
                { val: "moderate", label: "Moderate (3-5 days/week)" },
                { val: "active", label: "Active (6-7 days/week)" },
                { val: "veryactive", label: "Very Active (athlete level)" },
              ]} />
            </div>
          </div>
        </Card>

        <Card style={{ padding: 28, background: cardBg }} hover={false} dark={darkMode}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 6 }}>Health Conditions</h3>
          <p style={{ fontSize: 13, color: mutedColor, marginBottom: 16 }}>Select any conditions that apply for personalized recommendations</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {healthConditions.map((c) => {
              const selected = conditions.includes(c);
              return (
                <button
                  key={c}
                  onClick={() => toggleCondition(c)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 10,
                    border: `2px solid ${selected ? "#22C55E" : borderColor}`,
                    background: selected ? "#22C55E18" : "transparent",
                    color: selected ? "#22C55E" : textColor,
                    fontSize: 13,
                    fontWeight: selected ? 700 : 500,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}
                >
                  {selected ? "✓ " : ""}{c}
                </button>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Right: Calculated Values */}
      <div>
        {/* BMI Card */}
        <Card style={{ padding: 24, background: cardBg, marginBottom: 16 }} hover={false} dark={darkMode}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: textColor, marginBottom: 16 }}>📊 Body Mass Index (BMI)</h3>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 48, fontWeight: 900, color: bmiCat.color }}>{bmi.toFixed(1)}</div>
            <Badge color={bmiCat.color}>{bmiCat.label}</Badge>
          </div>
          <div style={{ position: "relative", height: 16, borderRadius: 99, background: "linear-gradient(to right, #0EA5E9, #22C55E, #F59E0B, #EF4444)", marginBottom: 8 }}>
            <div
              style={{
                position: "absolute",
                top: -4,
                left: `${Math.min(Math.max(((bmi - 10) / 30) * 100, 0), 100)}%`,
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: bmiCat.color,
                border: "3px solid #fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                transform: "translateX(-50%)",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: mutedColor }}>
            <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
          </div>
        </Card>

        {/* BMR & TDEE */}
        {[
          { label: "Basal Metabolic Rate (BMR)", value: Math.round(bmr), unit: "kcal/day", desc: "Calories burned at complete rest", color: "#0EA5E9", icon: "🫀" },
          { label: "Total Daily Energy Expenditure (TDEE)", value: Math.round(tdee), unit: "kcal/day", desc: "Calories to maintain current weight", color: "#22C55E", icon: "⚡" },
          { label: "Weight Loss Target", value: Math.round(tdee - 500), unit: "kcal/day", desc: "Caloric deficit for 0.5kg/week loss", color: "#8B5CF6", icon: "🎯" },
        ].map((m) => (
          <Card key={m.label} style={{ padding: 20, background: cardBg, marginBottom: 12 }} dark={darkMode}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: m.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{m.icon}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 11, color: mutedColor, fontWeight: 600, marginBottom: 2 }}>{m.label}</p>
                <p style={{ fontSize: 20, fontWeight: 800, color: m.color }}>
                  {m.value.toLocaleString()} <span style={{ fontSize: 12, color: mutedColor, fontWeight: 500 }}>{m.unit}</span>
                </p>
                <p style={{ fontSize: 11, color: mutedColor }}>{m.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── Health Reports Page ───────────────────────────────────────────────────────
const ReportsPage = ({ textColor, mutedColor, borderColor, cardBg, darkMode }) => (
  <div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: textColor, marginBottom: 4 }}>Health Reports</h2>
        <p style={{ color: mutedColor, fontSize: 14 }}>Comprehensive health and nutrition analysis reports</p>
      </div>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: 10,
          border: "none",
          background: "linear-gradient(135deg, #22C55E, #16A34A)",
          color: "#fff",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "inherit",
          boxShadow: "0 4px 12px rgba(34,197,94,0.3)",
        }}
      >
        📥 Download PDF Report
      </button>
    </div>

    {/* Health Score */}
    <Card style={{ padding: 28, background: cardBg, marginBottom: 20 }} hover={false} dark={darkMode}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: textColor, marginBottom: 8 }}>Overall Health Score</h3>
          <p style={{ color: mutedColor, fontSize: 14, maxWidth: 400 }}>Based on nutrient balance, caloric intake, deficiency severity, and consistency of logging over the past 30 days.</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#22C55E", lineHeight: 1 }}>74</div>
          <div style={{ fontSize: 14, color: mutedColor }}>/ 100</div>
          <Badge color="#22C55E">Good</Badge>
        </div>
      </div>
      <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {[
          { label: "Calorie Balance", score: 83, color: "#22C55E" },
          { label: "Protein Goal", score: 70, color: "#0EA5E9" },
          { label: "Micronutrients", score: 58, color: "#F59E0B" },
          { label: "Consistency", score: 90, color: "#8B5CF6" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <CircularProgress value={s.score} max={100} size={64} stroke={6} color={s.color} label={s.label} />
          </div>
        ))}
      </div>
    </Card>

    {/* Report Sections */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
      {[
        {
          title: "📋 Profile Summary",
          items: ["Name: Nandan Chakraborty", "Age: 28 | Female", "BMI: 23.9 — Normal Weight", "BMR: 1,456 kcal/day", "TDEE: 2,257 kcal/day"],
        },
        {
          title: "⚠️ Key Deficiencies",
          items: ["🔴 Iron: 35% of RDI — Critical", "🔴 Zinc: 30% of RDI — Critical", "🟡 Vitamin D: 42% of RDI — Low", "🟡 Calcium: 55% of RDI — Low"],
        },
        {
          title: "✅ Strengths",
          items: ["Vitamin B12: 78% — Good", "Magnesium: 82% — Adequate", "Potassium: 68% — Adequate", "Consistent logging (6/7 days)"],
        },
        {
          title: "🎯 30-Day Goals",
          items: ["Increase iron intake by 40%", "Add zinc-rich foods daily", "Sun exposure + Vitamin D foods", "Maintain protein target daily"],
        },
      ].map((section) => (
        <Card key={section.title} style={{ padding: 22, background: cardBg }} hover={false} dark={darkMode}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: textColor, marginBottom: 14 }}>{section.title}</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {section.items.map((item) => (
              <li key={item} style={{ fontSize: 13, color: item.startsWith("🔴") ? "#DC2626" : item.startsWith("🟡") ? "#B45309" : textColor, display: "flex", gap: 8, alignItems: "flex-start" }}>
                {!item.startsWith("🔴") && !item.startsWith("🟡") && !item.startsWith("🟢") && (
                  <span style={{ color: "#22C55E", flexShrink: 0 }}>•</span>
                )}
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </div>
);

// ─── Admin Dashboard ───────────────────────────────────────────────────────────
const AdminPage = ({ textColor, mutedColor, borderColor, cardBg, darkMode }) => (
  <div>
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: textColor, marginBottom: 4 }}>Admin Dashboard</h2>
      <p style={{ color: mutedColor, fontSize: 14 }}>Platform analytics and user management</p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
      {[
        { label: "Total Users", val: "12,847", delta: "+234 this week", color: "#22C55E", icon: "👥" },
        { label: "Active Today", val: "2,341", delta: "18.2% of total", color: "#0EA5E9", icon: "⚡" },
        { label: "Foods Logged", val: "89,204", delta: "today", color: "#F59E0B", icon: "🍽️" },
        { label: "AI Chats", val: "4,521", delta: "+12% vs yesterday", color: "#8B5CF6", icon: "🤖" },
        { label: "Meal Plans", val: "3,201", delta: "generated today", color: "#EC4899", icon: "📅" },
      ].map((c) => (
        <Card key={c.label} style={{ padding: "18px 20px", background: cardBg }} dark={darkMode}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <span style={{ fontSize: 22 }}>{c.icon}</span>
            <Badge color={c.color}>↑</Badge>
          </div>
          <p style={{ fontSize: 24, fontWeight: 900, color: textColor, marginBottom: 2 }}>{c.val}</p>
          <p style={{ fontSize: 12, color: c.color, fontWeight: 600 }}>{c.label}</p>
          <p style={{ fontSize: 11, color: mutedColor, marginTop: 2 }}>{c.delta}</p>
        </Card>
      ))}
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
      <Card style={{ padding: 24, background: cardBg }} hover={false} dark={darkMode}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 4 }}>User Growth</h3>
        <p style={{ fontSize: 12, color: mutedColor, marginBottom: 16 }}>New registrations this week</p>
        <MiniBarChart data={weeklyData.map((d, i) => ({ day: d.day, users: [180, 210, 165, 240, 195, 280, 234][i] }))} dataKey="users" color="#22C55E" height={140} />
      </Card>

      <Card style={{ padding: 24, background: cardBg }} hover={false} dark={darkMode}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: textColor, marginBottom: 16 }}>Top Deficiencies</h3>
        {[
          { name: "Iron", pct: 67, color: "#EF4444" },
          { name: "Vitamin D", pct: 54, color: "#F59E0B" },
          { name: "Zinc", pct: 48, color: "#8B5CF6" },
          { name: "Calcium", pct: 41, color: "#0EA5E9" },
          { name: "B12", pct: 28, color: "#22C55E" },
        ].map((d) => (
          <div key={d.name} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 13, color: textColor, fontWeight: 500 }}>{d.name}</span>
              <span style={{ fontSize: 12, color: d.color, fontWeight: 700 }}>{d.pct}% of users</span>
            </div>
            <ProgressBar value={d.pct} max={100} color={d.color} height={6} />
          </div>
        ))}
      </Card>
    </div>
  </div>
);

// ─── Settings Page ─────────────────────────────────────────────────────────────
const SettingsPage = ({ textColor, mutedColor, borderColor, cardBg, darkMode }) => {
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifReminders, setNotifReminders] = useState(true);
  const [notifDeficiency, setNotifDeficiency] = useState(true);
  const [units, setUnits] = useState("metric");
  const [mealReminders, setMealReminders] = useState(true);

  const Toggle = ({ val, set, label, desc }) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: `1px solid ${borderColor}` }}>
      <div>
        <p style={{ fontSize: 14, fontWeight: 600, color: textColor }}>{label}</p>
        {desc && <p style={{ fontSize: 12, color: mutedColor }}>{desc}</p>}
      </div>
      <button
        onClick={() => set(!val)}
        style={{
          width: 48,
          height: 26,
          borderRadius: 99,
          border: "none",
          background: val ? "#22C55E" : "#E2E8F0",
          cursor: "pointer",
          position: "relative",
          transition: "background 0.2s",
          flexShrink: 0,
        }}
      >
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#fff", position: "absolute", top: 3, left: val ? 25 : 3, transition: "left 0.2s", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} />
      </button>
    </div>
  );

  return (
    <div style={{ maxWidth: 700 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: textColor, marginBottom: 24 }}>Settings</h2>

      <Card style={{ padding: "8px 24px", background: cardBg, marginBottom: 20 }} hover={false} dark={darkMode}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: textColor, padding: "16px 0 8px" }}>🔔 Notifications</h3>
        <Toggle val={notifEmail} set={setNotifEmail} label="Email Notifications" desc="Receive weekly nutrition summaries via email" />
        <Toggle val={notifReminders} set={setNotifReminders} label="Meal Logging Reminders" desc="Get reminded to log meals at breakfast, lunch and dinner" />
        <Toggle val={notifDeficiency} set={setNotifDeficiency} label="Deficiency Alerts" desc="Be notified when critical deficiencies are detected" />
        <Toggle val={mealReminders} set={setMealReminders} label="Hydration Reminders" desc="Get hourly water intake reminders" />
      </Card>

      <Card style={{ padding: "8px 24px", background: cardBg, marginBottom: 20 }} hover={false} dark={darkMode}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: textColor, padding: "16px 0 8px" }}>⚙️ Preferences</h3>
        <div style={{ padding: "14px 0", borderBottom: `1px solid ${borderColor}` }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: textColor, marginBottom: 8 }}>Unit System</p>
          <div style={{ display: "flex", gap: 8 }}>
            {["metric", "imperial"].map((u) => (
              <button
                key={u}
                onClick={() => setUnits(u)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 8,
                  border: `2px solid ${units === u ? "#22C55E" : borderColor}`,
                  background: units === u ? "#22C55E18" : "transparent",
                  color: units === u ? "#22C55E" : textColor,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textTransform: "capitalize",
                }}
              >
                {u === "metric" ? "Metric (kg, cm)" : "Imperial (lbs, ft)"}
              </button>
            ))}
          </div>
        </div>
        <div style={{ padding: "14px 0" }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: textColor, marginBottom: 8 }}>Daily Calorie Goal</p>
          <input
            type="number"
            defaultValue={2200}
            style={{ padding: "10px 12px", borderRadius: 10, border: `1.5px solid ${borderColor}`, fontSize: 14, background: cardBg, color: textColor, outline: "none", width: 150, fontFamily: "inherit" }}
            onFocus={(e) => (e.target.style.borderColor = "#22C55E")}
            onBlur={(e) => (e.target.style.borderColor = borderColor)}
          />
        </div>
      </Card>

      <Card style={{ padding: "8px 24px", background: cardBg }} hover={false} dark={darkMode}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#EF4444", padding: "16px 0 8px" }}>⚠️ Danger Zone</h3>
        <div style={{ padding: "14px 0", display: "flex", gap: 12 }}>
          <button style={{ padding: "10px 20px", borderRadius: 10, border: "1.5px solid #E2E8F0", background: "transparent", color: textColor, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            Clear Food History
          </button>
          <button style={{ padding: "10px 20px", borderRadius: 10, border: "none", background: "#EF444418", color: "#EF4444", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            Delete Account
          </button>
        </div>
      </Card>
    </div>
  );
};

// ─── Main App ──────────────────────────────────────────────────────────────────
function App() {
  const [page, setPage] = useState("landing");

  const dashboardPages = ["dashboard", "foodlog", "nutrition", "deficiency", "recommendations", "mealplanner", "chat", "reports", "profile", "settings", "admin"];

  if (!dashboardPages.includes(page)) {
    if (page === "login" || page === "signup") return <AuthPage type={page} onNavigate={setPage} />;
    return <LandingPage onNavigate={setPage} />;
  }

  const PageComponent = {
    dashboard: DashboardPage,
    foodlog: FoodLogPage,
    nutrition: NutritionPage,
    deficiency: DeficiencyPage,
    recommendations: RecommendationsPage,
    mealplanner: MealPlannerPage,
    chat: ChatPage,
    reports: ReportsPage,
    profile: ProfilePage,
    settings: SettingsPage,
    admin: AdminPage,
  }[page];

  return (
    <AppShell activePage={page} onNavigate={setPage}>
      {(themeProps) => <PageComponent {...themeProps} />}
    </AppShell>
  );
}

export default App;
