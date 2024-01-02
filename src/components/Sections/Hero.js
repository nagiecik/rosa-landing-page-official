import { useMemo } from "react";
import HeroArticle from "../Elements/HeroArticle";
import Header from "../Elements/Header";
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
      <div className={styles.containerContent}>
        <Header
          logoURL="/imageLogoRosa.svg"
          alt="ROSA logo"
          showContainerDivLinks={true}
          showButtonMenu={true}
          showButtonCta={true}
          linkObjectFit="unset"
        />
        <div className={styles.contentArticle}>
          <HeroArticle
            buttonAppStore="/buttonAppStore.svg"
            buttonGooglePlay="/buttonGooglePlay.svg"
          />
          <img
            className={styles.imageHero}
            alt="ROSA double mobile screen"
            src="/imageHero.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
