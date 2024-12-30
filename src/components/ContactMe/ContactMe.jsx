import React, { useRef } from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import { FaDownload } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: 0,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function ContactMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 }); // Animation triggers when 10% of the section is in view.

  return (
    <div>
      <section className="contact-container" ref={ref}>
        <h5>Contact Me</h5>

        <motion.div
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"} // Conditional animation trigger
          className="contact-content"
        >
          <div>
            <div className="social-icon">
              <motion.div variants={variants} style={{ flex: 1 }}>
                <div className="contact-details-card" onClick={() => {}}>
                  <div className="icon">
                    <a
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                      href="mailto:ronishilwork@gmail.com"
                    >
                      <img src="./images/mail.png" alt="" />
                    </a>
                  </div>
                </div>

                <ContactInfoCard
                  iconUrl="./images/github.png"
                  link={"https://github.com/Ronigit01"}
                />
              </motion.div>

              <motion.div variants={variants} style={{ flex: 1 }}>
                <ContactInfoCard
                  iconUrl="./images/linkedin.png"
                  link={"https://www.linkedin.com/in/ronishil/"}
                />

                <ContactInfoCard
                  iconUrl="./images/behance.png"
                  link="https://www.behance.net/ronishilUi"
                />
              </motion.div>

              <motion.div variants={variants} style={{ flex: 1 }}>
                <ContactInfoCard
                  iconUrl="./images/twitter.png"
                  link="https://x.com/ronishi85665650"
                />

                <ContactInfoCard
                  iconUrl="./images/facebook.png"
                  link={"https://www.facebook.com/profile.php?id=100073451126807"}
                />
              </motion.div>

              <motion.div
                variants={variants}
                className="social"
                style={{ flex: 1 }}
              >
                <ContactInfoCard
                  iconUrl="./images/instagram.png"
                  link={"https://www.instagram.com/ronishil321/"}
                />

                <ContactInfoCard
                  iconUrl="./images/whatsapp.png"
                  link={"https://wa.me/+916291557796"}
                />
              </motion.div>
            </div>

            <a href="./images/RoniShilResume.pdf" download="RoniShilResume.pdf">
              <button  className="resume">
                <span>
                  Download Resume <FaDownload />
                </span>
              </button>
            </a>
          </div>

          <motion.div variants={variants} style={{ flex: 1 }}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default ContactMe;
