import PageWrapper from "../components/PageWrapper";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <div className="hero" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

        <h1 style={{ marginBottom: "6px" }}>Afhaan</h1>

        {/* Accent line */}
        <div className="hero-line"></div>

        {/* Role */}
        <p style={{ fontSize: "1rem" }}>
          Frontend Developer • React
        </p>

        {/* One-line intro */}
        <p style={{ marginTop: "10px", fontSize: "0.95rem", opacity: 0.85 }}>
          I build clean, responsive web applications with a focus on user experience.
        </p>

        {/* Social / Contact Icons */}
        <div className="icon-row">
          <a
            href="https://github.com/afhaan247"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-afhaan-7561073a1"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/afhaannnn"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/918925188760"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="tel:+918925188760"
            aria-label="Phone"
          >
            <FaPhoneAlt />
          </a>

          <a
            href="mailto:afhaan247@gmail.com"
            aria-label="Email"
          >
            <MdEmail />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
          >
            <FaFilePdf />
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
