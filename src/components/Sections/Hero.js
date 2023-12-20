import { useMemo } from "react";
import HeroArticle from "../Contents/HeroArticle";
import Header from "../Header";
import styles from "./Hero.module.css";

const Containersectionhero = ({ sectionZIndex }) => {
  const containerSectionHeroStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  return (
    <section
      className={styles.containerSectionHero}
      style={containerSectionHeroStyle}
    >
      <div className={styles.containerContent}>
        <Header
          logoURL="/imagelogorosa.svg"
          alt="ROSA logo"
          showContainerDivLinks
          showButtonMenu={false}
          showButtonCta
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

export default Containersectionhero;
