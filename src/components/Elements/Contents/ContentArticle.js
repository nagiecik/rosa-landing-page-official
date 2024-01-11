import useMediaQuery from "../../../utils/useMediaQuery";
import { motion } from "framer-motion";
import styles from "./ContentArticle.module.css";

const ContentArticle = ({ buttonGooglePlay, buttonAppStore }) => {
  const tablet = useMediaQuery("(max-width: 768px)");
  const mobile = useMediaQuery("(max-width: 430px)");

  const easeSlow = {
    duration: 2,
    ease: [0.15, 0.85, 0.47, 0.97],
  };
  return (
    <motion.article
      initial={{ transform: "translate(-100px, 0)", opacity: 0 }}
      whileInView={{ transform: "translate(0, 0)", opacity: 1 }}
      transition={easeSlow}
      viewport={{ once: true }}
      className={styles.containerContent}
    >
      {(tablet && !mobile) || !tablet ? (
        <div className={styles.containerHeader}>
          <h1 className={styles.textHeaderLight}>Gamechanger</h1>
          {!tablet && (
            <>
              <h1 className={styles.textHeaderBold}>In The Way</h1>
              <h1 className={styles.textHeaderLight}>You Manage</h1>
            </>
          )}
          {tablet && !mobile && (
            <h1 className={styles.textHeaderBold}>In The Way You Manage</h1>
          )}
        </div>
      ) : (
        mobile && (
          <div className={styles.containerHeader}>
            <h1 className={styles.textHeaderLight}>Gamechanger</h1>
            <h1 className={styles.textHeaderBold}>In The Way</h1>
            <h1 className={styles.textHeaderLight}>You Manage</h1>
          </div>
        )
      )}

      <p className={styles.textParagraph}>
        In the realm of sports governance, every organization encounters common
        challenges, irrespective of the specific laws and regulations they
        oversee. These challenges include the constant evolution of rules and
        the imperative to ensure their effective dissemination.
      </p>
      <div className={styles.containerButtons}>
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
    </motion.article>
  );
};

export default ContentArticle;
