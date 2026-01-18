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
      <h1 style={{ marginBottom: "6px" }}>Afhaan</h1>

      <p style={{ fontSize: "1rem" }}>
        Frontend Developer • React
      </p>

      <div className="icon-row">
        {/* GitHub */}
        <a
          href="https://github.com/afhaan247"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mohammed-afhaan-7561073a1"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/afhaan247"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918925188760"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* Phone */}
        <a
          href="tel:+918925188760"
          aria-label="Phone"
        >
          <FaPhoneAlt />
        </a>

        {/* Email */}
        <a
          href="mailto:afhaan247@gmail.com"
          aria-label="Email"
        >
          <MdEmail />
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="Resume"
        >
          <FaFilePdf />
        </a>
      </div>
    </PageWrapper>
  );
}

export default Home;
