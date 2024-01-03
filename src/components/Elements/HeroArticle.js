import { useMemo } from "react";
import styles from "./HeroArticle.module.css";

const HeroArticle = ({ buttonGooglePlay, buttonAppStore }) => {
  return (
    <article className={styles.containerArticle}>
      <div className={styles.containerTitle}>
        <h1 className={styles.light}>Gamechanger</h1>
        <h1 className={styles.bold}>In The Way</h1>
        <h1 className={styles.light}>You Manage</h1>
      </div>
      <p className={styles.textHeroParagraph}>
        In the realm of sports governance, every organization encounters common
        challenges, irrespective of the specific laws and regulations they
        oversee. These challenges include the constant evolution of rules and
        the imperative to ensure their effective dissemination.
      </p>
      <div className={styles.containerStoreButtons}>
        <a href="#">
          <img
            className={styles.buttonGooglePlay}
            alt="Google Play Button"
            src={buttonGooglePlay}
          />
        </a>
        <a href="#"><img
          className={styles.buttonAppStore}
          alt="App Store Button"
          src={buttonAppStore}
        /></a>
      </div>
      {/* <div className={styles.containerRating}>
        <div className={styles.containerRatingText}>
          <label className={styles.textRatingLabel}>Excellent</label>
          <b className={styles.textRatingBold}>4.9 out of 5</b>
        </div>
        <div className={styles.containerIcons}>
          <img
            className={styles.iconStar}
            alt="Star Icon"
            src="/iconStar.png"
          />
          <img
            className={styles.iconStar}
            alt="Star Icon"
            src="/iconStar.png"
          />
          <img
            className={styles.iconStar}
            alt="Star Icon"
            src="/iconStar.png"
          />
          <img
            className={styles.iconStar}
            alt="Star Icon"
            src="/iconStar.png"
          />
          <img
            className={styles.iconStar}
            alt="Star Icon"
            src="/iconStar.png"
          />
        </div>
      </div> */}
    </article>
  );
};

export default HeroArticle;