import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sendContactMessage } from "../../api/contact";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",

    email: "",

    subject: "",

    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");
  function handleChange(e) {
    setSuccess("");
    setError("");
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    setSuccess("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all fields.");

      return;
    }

    try {
      setLoading(true);

      const response = await sendContactMessage(formData);

      setSuccess(response.message);

      setFormData({
        name: "",

        email: "",

        subject: "",

        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [success]);

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="contact-hero">
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-tag">📩 Contact Us</span>

          <h1>
            We'd Love
            <span> To Hear From You</span>
          </h1>

          <p>
            Have a question, suggestion or partnership idea? Send us a message
            and we'll get back to you.
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

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={loading}
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
              />
              {error && <p className="contact-error">{error}</p>}

              {success && <p className="contact-success">{success}</p>}
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
