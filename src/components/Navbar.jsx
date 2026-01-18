import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>Afhaan</span>

      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
        <NavLink to="/projects" style={styles.link}>Projects</NavLink>
        <NavLink to="/contact" style={styles.link}>Contact</NavLink>
      </div>

      <div style={styles.icons}>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    height: "72px",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  logo: {
    fontWeight: 600,
    fontSize: "1.05rem",
    color: "#111827",
    whiteSpace: "nowrap",
  },

  links: {
    display: "flex",
    gap: "16px",
    fontSize: "0.9rem",
  },

  link: {
    color: "#374151",
    textDecoration: "none",
    fontWeight: 500,
  },

  icons: {
    display: "flex",
    gap: "14px",
    fontSize: "1.15rem",
    color: "#374151",
  },
};

export default Navbar;
