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
        <div className={styles.containerImage}>
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
        </div>
      </div>
      <a href="#testimonials">
        {!matches && (
          <div className={styles.containerScroll}>
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
            <h2 className={styles.textScroll}>Scroll down</h2>
          </div>
        )}
      </a>
    </section>
  );
};

export default Hero;
