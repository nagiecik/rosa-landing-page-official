import { useMemo } from "react";
import Header from "../Header";
import HeroArticle from "../Contents/HeroArticle";
import styles from "./Hero.module.css";

const Containersectionhero = ({
  imagelogo,
  imageappstore,
  imagegoogleplay,
  containersectionheroZIndex,
  imagelogoIconObjectFit,
  imageappstoreIconObjectFit,
  imagegoogleplayIconObjectFit,
  textlabelCursor,
  showContainerDivLinks,
  showButtonMenu,
  showButtonCta,
}) => {
  const containersectionheroStyle = useMemo(() => {
    return {
      zIndex: containersectionheroZIndex,
    };
  }, [containersectionheroZIndex]);

  const imagelogoIconStyle = useMemo(() => {
    return {
      objectFit: imagelogoIconObjectFit,
    };
  }, [imagelogoIconObjectFit]);

  const imageappstoreIconStyle = useMemo(() => {
    return {
      objectFit: imageappstoreIconObjectFit,
    };
  }, [imageappstoreIconObjectFit]);

  const imagegoogleplayIconStyle = useMemo(() => {
    return {
      objectFit: imagegoogleplayIconObjectFit,
    };
  }, [imagegoogleplayIconObjectFit]);

  const textlabelStyle = useMemo(() => {
    return {
      cursor: textlabelCursor,
    };
  }, [textlabelCursor]);

  return (
    <section
      className={styles.containerSectionHero}
      style={containersectionheroStyle}
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
