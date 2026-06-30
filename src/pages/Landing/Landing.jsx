import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import Footer from "../../components/Footer";
import Features from "../Features/Features";

export default function Landing() {
  return (
    <>
      <Navbar />

      <main style={{ marginTop: "75px" }}>
      <Hero />
      </main>
      <Footer />
    </>
  );
}