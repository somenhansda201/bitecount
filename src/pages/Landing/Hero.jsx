import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {

    const stats = [
        { number: "50K+", label: "Foods Database" },
        { number: "12+", label: "Nutrients Tracked" },
        { number: "6", label: "Health Conditions" },
        { number: "98%", label: "User Satisfaction" },
    ];

    return (

        <section className="hero">

            <div className="hero-container">

                {/* Left */}

                <motion.div
                    className="hero-left"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                >

                    <span className="hero-badge">
                        ✨ AI Powered Nutrition Intelligence
                    </span>

                    <h1>

                        Eat Smart.

                        <span> Live Healthier.</span>

                    </h1>

                    <p>

                        Track nutrition, detect deficiencies and receive
                        personalized AI meal recommendations designed
                        specifically for your health goals.

                    </p>

                    <div className="hero-buttons">

                        <Link className="hero-start" to="/signup">

                            🚀 Get Started

                        </Link>

                        <Link className="hero-demo" to="/dashboard">

                            👀 Live Demo

                        </Link>

                    </div>

                </motion.div>

                {/* Right */}

{/* Right Side */}

<motion.div
    className="hero-image"
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
>

    <div className="slider-container">

        <div className="slider-placeholder">

            <div className="placeholder-icon">

                🖼️

            </div>

            <h3>BiteCount Preview</h3>

            <p>

                Interactive dashboard screenshots
                will appear here.

            </p>

            <button>

                Coming Soon

            </button>

        </div>

    </div>

</motion.div>

            </div>

            {/* Stats */}

            <motion.div

                className="hero-stats"

                initial={{ opacity: 0, y: 40 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: .4 }}

            >

                {

                    stats.map((item) => (

                        <div key={item.label} className="stat-card">

                            <h2>{item.number}</h2>

                            <p>{item.label}</p>

                        </div>

                    ))

                }

            </motion.div>

        </section>

    );

}