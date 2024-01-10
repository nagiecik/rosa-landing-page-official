import { useMemo, useEffect, useState } from "react";
import ContentArticle from "../Elements/Contents/ContentArticle";
import Nav from "../Elements/Navigation/Nav";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = ({ sectionZIndex }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const containerSectionStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  const easeSlow = {
    duration: 2,
    ease: [0.15, 0.85, 0.47, 0.97],
  };

  const easeFast = {
    duration: 0.8,
    ease: [0.15, 0.85, 0.47, 0.97],
  };

  return (
    <section
      id="start"
      className={styles.containerSection}
      style={containerSectionStyle}
    >
      <div className={styles.containerContent}>
        <ContentArticle
          buttonAppStore="/buttonAppStore.svg"
          buttonGooglePlay="/buttonGooglePlay.svg"
        />
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: "5deg",
          }}
          transition={easeFast}
          className={styles.containerHover}
        >
          <motion.div
            initial={{ opacity: 0, transform: `translate(0, 200px)` }}
            whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
            transition={easeSlow}
            viewport={{ once: true }}
            className={styles.containerImage}
          >
            <img
              className={styles.imageRight}
              alt=""
              src="/mockups/heroMockup-1.png"
            />
            <img
              className={styles.imageLeft}
              alt=""
              src="/mockups/heroMockup-2.png"
            />
          </motion.div>
        </motion.div>
      </div>
      <a href="#testimonials">
        {!matches && (
          <motion.div
            initial={{ opacity: 0, transform: `translate(0, 40px)` }}
            whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
            transition={easeSlow}
            viewport={{ once: true }}
            className={styles.containerScroll}
          >
            <span className={styles.containerMouse}>
              <motion.div
                animate={{ opacity: [0, 0.5, 1, 0.5, 0], y: [0, 40] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 3,
                }}
                className={styles.containerMove}
              ></motion.div>
            </span>
            <span className={styles.textScroll}>Scroll down</span>
          </motion.div>
        )}
      </a>
    </section>
  );
};

export default Hero;
