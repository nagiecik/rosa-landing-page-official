import useMediaQuery from "../../../utils/useMediaQuery";
import { motion } from "framer-motion";
import { getMotionProperties, easeSlow } from "../../../utils/motionUtils";
import ButtonGoogle from "../Buttons/Stores/ButtonGoogle";
import styles from "./ContentArticle.module.css";
import ButtonApple from "../Buttons/Stores/ButtonApple";

const ContentArticle = ({ buttonGooglePlay, buttonAppStore }) => {
  const tablet = useMediaQuery("(max-width: 768px)");
  const mobile = useMediaQuery("(max-width: 430px)");

  const motionArticle = getMotionProperties("-100px, 0", "0, 0", easeSlow);

  return (
    <motion.article {...motionArticle} className={styles.containerContent}>
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
        <ButtonGoogle />
        <ButtonApple />
      </div>
    </motion.article>
  );
};

export default ContentArticle;
