import PageWrapper from "../components/PageWrapper";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <PageWrapper>
      <h1 style={{ marginBottom: "6px" }}>Afhaan</h1>

<p style={{ fontSize: "1rem" }}>
  Frontend Developer • React
</p>

<div className="icon-row">
  <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>
  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>
  <a href="mailto:yourmail@gmail.com">
    <MdEmail />
  </a>
  <a href="/resume.pdf" target="_blank" rel="noreferrer">
    <FaFilePdf />
  </a>
</div>

    </PageWrapper>
  );
}

export default Home;
