    import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

function Resume() {
  return (
    <PageWrapper>
      <h1>Resume</h1>

      {/* Download Button */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        className="resume-btn"
      >
        Download Resume
      </motion.a>

      {/* Skills */}
      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML & CSS</span>
          <span>MySQL</span>
          <span>Git</span>
        </div>
      </section>

      {/* Education */}
      <section className="resume-section">
        <h2>Education</h2>
        <p><strong>Bachelor’s Degree</strong></p>
        <p>Your College Name</p>
        <p>Year</p>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2>Experience</h2>
        <p><strong>Frontend Developer</strong></p>
        <p>Built responsive web apps using React.</p>
      </section>
    </PageWrapper>
  );
}

export default Resume;
