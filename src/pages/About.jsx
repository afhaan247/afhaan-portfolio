import PageWrapper from "../components/PageWrapper";

function About() {
  return (
    <PageWrapper>
      <h1>About Me</h1>

      <p style={{ marginTop: "16px" }}>
        I am a Full Stack Developer with a strong interest in building modern,
        scalable, and user-focused web applications. I enjoy working across both
        front-end and back-end to create smooth and reliable digital experiences.
      </p>

      <p style={{ marginTop: "12px" }}>
        The tools and technologies I work with include <strong>JSX</strong>,{" "}
        <strong>React</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
        <strong>MySQL</strong>.
      </p>
    </PageWrapper>
  );
}

export default About;
