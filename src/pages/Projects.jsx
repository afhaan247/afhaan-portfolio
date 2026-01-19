import PageWrapper from "../components/PageWrapper";

function Projects() {
  return (
    <PageWrapper>
      <h1>Projects</h1>
      <p style={{ marginBottom: "36px" }}>
        A selection of projects I have worked on during my learning journey.
      </p>

      <div style={gridStyle}>
        {/* Project 1 */}
        <div style={cardStyle}>
          <h3 style={titleStyle}>Study App</h3>
          <p style={descStyle}>
            A study management application designed to help students organize
            subjects, notes, and tasks in one place.
          </p>
          <p style={techStyle}>
            React • JSX • CSS • MySQL
          </p>
        </div>

        {/* Project 2 */}
        <div style={cardStyle}>
          <h3 style={titleStyle}>Personal Portfolio</h3>
          <p style={descStyle}>
            A responsive and professional portfolio website to showcase my
            skills, projects, and contact details.
          </p>
          <p style={techStyle}>
            React • Vite • CSS • Framer Motion
          </p>
        </div>

        {/* Project 3 */}
        <div style={cardStyle}>
          <h3 style={titleStyle}>Todo Management App</h3>
          <p style={descStyle}>
            A simple task management app that allows users to add, update,
            and track daily tasks efficiently.
          </p>
          <p style={techStyle}>
            React • JavaScript • CSS
          </p>
        </div>

        {/* Project 4 */}
        <div style={cardStyle}>
          <h3 style={titleStyle}>Notes App</h3>
          <p style={descStyle}>
            A lightweight notes application for creating, editing, and managing
            personal notes.
          </p>
          <p style={techStyle}>
            React • HTML • CSS
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

/* ---------- STYLES ---------- */

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "28px",
  width: "100%",
};

const cardStyle = {
  background: "#ffffff",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const titleStyle = {
  fontSize: "1.15rem",
  fontWeight: 600,
  marginBottom: "10px",
  color: "#111827",
};

const descStyle = {
  fontSize: "0.95rem",
  lineHeight: "1.6",
  color: "#374151",
};

const techStyle = {
  marginTop: "16px",
  fontSize: "0.85rem",
  color: "#6b7280",
};

export default Projects;
