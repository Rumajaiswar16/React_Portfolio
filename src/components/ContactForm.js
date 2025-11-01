import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const formContainerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ContactForm = ({ isActive }) => {
  const containerControls = useAnimation();
  const field1Controls = useAnimation();
  const field2Controls = useAnimation();
  const field3Controls = useAnimation();
  const field4Controls = useAnimation();
  const buttonControls = useAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (isActive) {
      containerControls.start("visible");

      setTimeout(() => field1Controls.start("visible"), 200);
      setTimeout(() => field2Controls.start("visible"), 350);
      setTimeout(() => field3Controls.start("visible"), 500);
      setTimeout(() => field4Controls.start("visible"), 650);
      setTimeout(() => buttonControls.start("visible"), 800);
    } else {
      containerControls.start("hidden");
      field1Controls.start("hidden");
      field2Controls.start("hidden");
      field3Controls.start("hidden");
      field4Controls.start("hidden");
      buttonControls.start("hidden");
    }
  }, [
    isActive,
    containerControls,
    field1Controls,
    field2Controls,
    field3Controls,
    field4Controls,
    buttonControls,
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.div
      className="row"
      variants={formContainerVariants}
      initial="hidden"
      animate={containerControls}
    >
      <div className="contact-form padd-15">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <motion.div
              className="form-item col-6 padd-15"
              variants={formItemVariants}
              initial="hidden"
              animate={field1Controls}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </motion.div>
            <motion.div
              className="form-item col-6 padd-15"
              variants={formItemVariants}
              initial="hidden"
              animate={field2Controls}
            >
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </motion.div>
          </div>

          <div className="row">
            <motion.div
              className="form-item col-12 padd-15"
              variants={formItemVariants}
              initial="hidden"
              animate={field3Controls}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </motion.div>
          </div>

          <div className="row">
            <motion.div
              className="form-item col-12 padd-15"
              variants={formItemVariants}
              initial="hidden"
              animate={field4Controls}
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
          </div>

          <div className="row">
            <motion.div
              className="form-item col-12 padd-15"
              variants={formItemVariants}
              initial="hidden"
              animate={buttonControls}
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
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
