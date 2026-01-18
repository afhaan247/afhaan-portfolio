import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="hero"
    >
      <img src="https://via.placeholder.com/120" alt="profile" />
      <h1>Your Name</h1>
      <p>Developer • Designer • Creator</p>
    </motion.div>
  );
}

export default Hero;
