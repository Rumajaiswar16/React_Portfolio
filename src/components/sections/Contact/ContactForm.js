import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const ContactForm = ({ isActive }) => {
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    controls.start(isActive ? "visible" : "hidden");
  }, [isActive, controls]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Name", col: "col-6" },
    { name: "email", type: "email", placeholder: "Email", col: "col-6" },
    { name: "subject", type: "text", placeholder: "Subject", col: "col-12" },
  ];

  return (
    <motion.div
      className="row"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="contact-form padd-15">
        <form onSubmit={handleSubmit}>
          <div className="row">
            {fields.map((field, i) => (
              <motion.div
                key={field.name}
                className={`form-item ${field.col} padd-15`}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate={controls}
              >
                <div className="form-group">
                  <input
                    type={field.type}
                    name={field.name}
                    className="form-control"
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="form-item col-12"
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
          </motion.div>
          <motion.div
            className="form-item col-12 padd-15"
            custom={4}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.button
              type="submit"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
