import { useMemo, useEffect, useState } from "react";
import ContentArticle from "../Elements/Contents/ContentArticle";
import Nav from "../Elements/Navigation/Nav";
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
      <Nav logoURL="/imageLogoRosa.svg" alt="ROSA logo" />
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
              <span className={styles.containerMove}></span>
            </span>
            <h2 className={styles.textScroll}>Scroll down</h2>
          </div>
        )}
      </a>
    </section>
  );
};

export default Hero;
