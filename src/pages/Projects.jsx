import PageWrapper from "../components/PageWrapper";

function Projects() {
  return (
    <PageWrapper>
      <h1>Projects</h1>
      <p style={{ marginBottom: "32px" }}>
        A selection of projects I have worked on during my learning journey.
      </p>

      <div style={gridStyle}>
        {/* Project 1 */}
        <div style={cardStyle}>
          <h3>Study App</h3>
          <p>
            A study management application designed to help students organize
            subjects, notes, and tasks in one place.
          </p>
          <p style={techStyle}>
            React • JSX • CSS • MySQL
          </p>
        </div>

        {/* Project 2 */}
        <div style={cardStyle}>
          <h3>Personal Portfolio</h3>
          <p>
            A responsive and professional portfolio website to showcase my
            skills, projects, and contact details.
          </p>
          <p style={techStyle}>
            React • Vite • CSS • Framer Motion
          </p>
        </div>

        {/* Project 3 */}
        <div style={cardStyle}>
          <h3>Todo Management App</h3>
          <p>
            A simple task management app that allows users to add, update,
            and track daily tasks efficiently.
          </p>
          <p style={techStyle}>
            React • JavaScript • CSS
          </p>
        </div>

        {/* Project 4 */}
        <div style={cardStyle}>
          <h3>Notes App</h3>
          <p>
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

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "24px",
  width: "100%",
};

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  textAlign: "left",
};

const techStyle = {
  marginTop: "12px",
  fontSize: "0.85rem",
  color: "#6b7280",
};

export default Projects;
