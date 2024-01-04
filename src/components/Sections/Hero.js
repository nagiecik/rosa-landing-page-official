import { useMemo } from "react";
import ContentArticle from "../Elements/Contents/ContentArticle";
import Nav from "../Elements/Navigation/Nav";
import styles from "./Hero.module.css";

const Hero = ({ sectionZIndex }) => {
  const containerSectionHeroStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  return (
    <section
      id="start"
      className={styles.containerSection}
      style={containerSectionHeroStyle}
    >
      <Nav
        logoURL="/imageLogoRosa.svg"
        alt="ROSA logo"
        showContainerDivLinks={true}
        showButtonMenu={true}
        showButtonCta={true}
        linkObjectFit="unset"
      />
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
    </section>
  );
};

export default Hero;
