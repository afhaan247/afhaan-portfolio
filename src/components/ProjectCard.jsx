import { motion } from "framer-motion";

function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        View Project →
      </a>
    </motion.div>
  );
}

export default ProjectCard;
