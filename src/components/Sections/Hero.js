import { useMemo, useEffect, useState } from "react";
import ContentArticle from "../Elements/Contents/ContentArticle";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import ButtonScroll from "../Elements/Buttons/ButtonScroll";

const Hero = ({ sectionZIndex }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1024px)")
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
          whileHover={{ scale: 1.05, rotate: "5deg" }}
          className={styles.containerMotion}
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

      {!matches && (
        <motion.div
          initial={{ opacity: 0, transform: `translate(0, 40px)` }}
          whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
          transition={easeSlow}
          viewport={{ once: true }}
          className={styles.containerScrollMotion}
        >
          <ButtonScroll
            linkScrollURL="#testimonials"
            imageScrollURL="./icons/scroll-down.svg"
            iconScrollURL="./icons/arrow.down.svg"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
