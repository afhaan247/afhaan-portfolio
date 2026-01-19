import PageWrapper from "../components/PageWrapper";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <PageWrapper>
      <div
        className="hero"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Name */}
        <h1 style={{ marginBottom: "6px" }}>Afhaan</h1>

        {/* Accent Line */}
        <div className="hero-line"></div>

        {/* Role */}
        <p style={{ fontSize: "1rem" }}>
          Frontend Developer • React
        </p>

        {/* Intro */}
        <p style={{ marginTop: "10px", fontSize: "0.95rem", opacity: 0.85 }}>
          I build clean, responsive web applications with a focus on user experience.
        </p>

        {/* Icons */}
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
            href="mailto:afhaan247@gmail.com"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
