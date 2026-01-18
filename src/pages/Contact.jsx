import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lkwjxz3",
      "Afhaan",
      form.current,
      "1NDbmWWADq1qgOmjO"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      () => {
        alert("Failed to send message.");
      }
    );
  };

  return (
    <PageWrapper>
      <h1>Contact Me</h1>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />

        <motion.button whileHover={{ scale: 1.05 }}>
          Send Message
        </motion.button>
      </motion.form>
    </PageWrapper>
  );
}

export default Contact;
