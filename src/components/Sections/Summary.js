import { useMemo } from "react";
import SectionTextContent from "../Elements/SectionTextContent";
import styles from "./Summary.module.css";

const Summary = ({ buttonGooglePlay, buttonAppStore, sectionZIndex }) => {
  const containerSummaryStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);
  return (
    <section className={styles.containerSection} style={containerSummaryStyle}>
      <div className={styles.containerContent}>
        <img
          className={styles.imageDeviceSecondary}
          alt=""
          src="/imageSummary-2.png"
        />
        <img
          className={styles.imageDevicePrimary}
          alt=""
          src="/imageSummary-1.png"
        />
        <div className={styles.containerArticle}>
          <SectionTextContent
            firstText="Make Sport"
            firstTextColor="var(--surface-primary)"
            firstTextWeight="var(--font-thin)"
            secondText="Rules Move"
            secondTextColor="var(--surface-primary)"
            secondTextWeight="var(--font-semibold)"
          />
          <p className={styles.textParagraph}>
            Join the multitude of organizations that have placed their trust in
            us. With ROSA, empower your organization to create a custom rule app
            using our ready-made solution.
          </p>
          <div className={styles.containerStoreButtons}>
            <a href="https://play.google.com/store/apps/details?id=pl.mamf.rosa.example&hl=pl&gl=US">
              <img
                className={styles.buttonGooglePlay}
                alt="Google Play Button"
                src={buttonGooglePlay}
              />
            </a>
            <a href="https://apps.apple.com/pl/app/rosa-rules-of-sports-app/id1622562179">
              <img
                className={styles.buttonAppStore}
                alt="App Store Button"
                src={buttonAppStore}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
