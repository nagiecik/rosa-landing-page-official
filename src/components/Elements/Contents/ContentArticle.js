import { useMemo, useState, useEffect } from "react";
import styles from "./ContentArticle.module.css";

const ContentArticle = ({ buttonGooglePlay, buttonAppStore }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <article className={styles.containerContent}>
      {!matches && (
        <div className={styles.containerHeader}>
          <h1 className={styles.textHeaderLight}>Gamechanger</h1>
          <h1 className={styles.textHeaderBold}>In The Way</h1>
          <h1 className={styles.textHeaderLight}>You Manage</h1>
        </div>
      )}
      {matches && (
        <div className={styles.containerHeader}>
          <h1 className={styles.textHeaderLight}>Gamechanger In </h1>
          <h1 className={styles.textHeaderBold}>The Way You Manage</h1>
        </div>
      )}
      <p className={styles.textParagraph}>
        In the realm of sports governance, every organization encounters common
        challenges, irrespective of the specific laws and regulations they
        oversee. These challenges include the constant evolution of rules and
        the imperative to ensure their effective dissemination.
      </p>
      <div className={styles.containerButtons}>
        <a href="#">
          <img
            className={styles.buttonGooglePlay}
            alt="Google Play Button"
            src={buttonGooglePlay}
          />
        </a>
        <a href="#">
          <img
            className={styles.buttonAppStore}
            alt="App Store Button"
            src={buttonAppStore}
          />
        </a>
      </div>
    </article>
  );
};

export default ContentArticle;
