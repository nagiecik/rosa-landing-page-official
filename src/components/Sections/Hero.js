import { useMemo } from "react";
import HeroArticle from "../Contents/HeroArticle";
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
      className={styles.containerHero}
      style={containerSectionHeroStyle}
    >
      <div className={styles.containerContent}>
        <Header
          logoURL="/imagelogorosa.svg"
          alt="ROSA logo"
          showContainerDivLinks
          showButtonMenu={false}
          showButtonCta={true}
          linkObjectFit="unset"
        />
        <div className={styles.content}>
          <HeroArticle
            buttonAppStore="/buttonAppStore.svg"
            buttonGooglePlay="/buttonGooglePlay.svg"
          />
          <img
            className={styles.imageHero}
            alt="ROSA double mobile screen"
            src="/imagehero.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
