import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Links() {
  return (
    <div className="links">
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link className="link-btn" to="/about">About</Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link className="link-btn" to="/projects">Projects</Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link className="link-btn" to="/contact">Contact</Link>
      </motion.div>
    </div>
  );
}

export default Links;
