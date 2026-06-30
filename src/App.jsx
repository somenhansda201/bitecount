import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import FoodLog from "./pages/FoodLog/FoodLog";
import Nutrition from "./pages/Nutrition/Nutrition";
import Deficiency from "./pages/Deficiency/Deficiency";
import Recommendation from "./pages/Recommendation/Recommendation";
import MealPlanner from "./pages/MealPlanner/MealPlanner";
import Chat from "./pages/Chat/Chat";
import Reports from "./pages/Reports/Reports";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import Features from "./pages/Features/Features";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/foodlog" element={<FoodLog />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/deficiency" element={<Deficiency />} />
      <Route path="/recommendation" element={<Recommendation />} />
      <Route path="/mealplanner" element={<MealPlanner />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  );
}

export default App;