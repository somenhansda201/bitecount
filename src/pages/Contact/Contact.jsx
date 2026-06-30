import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="contact-hero">

        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >

          <span className="contact-tag">
            📩 Contact Us
          </span>

          <h1>

            We'd Love

            <span> To Hear From You</span>

          </h1>

          <p>

            Have a question, suggestion or partnership idea?
            Send us a message and we'll get back to you.

          </p>

        </motion.div>

      </section>

      {/* Contact Section */}

      <section className="contact-section">

        <div className="contact-container">

          {/* Left */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2>Get in Touch</h2>

            <div className="info-card">

              <Mail />

              <div>

                <h4>Email</h4>

                <p>support@bitecount.ai</p>

              </div>

            </div>

            <div className="info-card">

              <Phone />

              <div>

                <h4>Phone</h4>

                <p>+91 98765 43210</p>

              </div>

            </div>

            <div className="info-card">

              <MapPin />

              <div>

                <h4>Location</h4>

                <p>Kolkata, India</p>

              </div>

            </div>

            <div className="info-card">

              <Clock />

              <div>

                <h4>Working Hours</h4>

                <p>Mon - Fri : 9 AM - 6 PM</p>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2>Send a Message</h2>

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
              />

              <button>

                Send Message

              </button>

            </form>

          </motion.div>

        </div>

      </section>

      <Footer />

    </>
  );
}