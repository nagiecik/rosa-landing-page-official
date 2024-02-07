import { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../../utils/useMediaQuery";
import {
  getMotionProperties,
  easeSlow,
  easeFast,
  getHoverProperties,
} from "../../utils/motionUtils";
import ContentArticle from "../Elements/Contents/ContentArticle";
import ButtonScroll from "../Elements/Buttons/ButtonScroll";
import styles from "./StartHere.module.css";

const StartHere = ({ sectionZIndex }) => {
  const tabletHorizontal = useMediaQuery("(max-width: 1024px");

  const motionImagesContainer = getMotionProperties(
    "0, 200px",
    "0, 0",
    easeSlow
  );
  const motionScrollDownContainer = getMotionProperties(
    "0, 40px",
    "0, 0",
    easeSlow
  );
  const motionImagesHover = getHoverProperties(1.1, "5deg", easeFast);

  const containerSectionStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  return (
    <section
      id="start_here"
      className={styles.containerSection}
      style={containerSectionStyle}
    >
      <div className={styles.containerContent}>
        <ContentArticle
          buttonAppStore="/buttonAppStore.svg"
          buttonGooglePlay="/buttonGooglePlay.svg"
        />
        <motion.div {...motionImagesHover} className={styles.containerMotion}>
          <motion.div
            {...motionImagesContainer}
            className={styles.containerImage}
          >
            <img
              className={styles.imageRight}
              alt="ROSA home screen app 1"
              src="/mockups/heroMockup-1.png"
            />
            <img
              className={styles.imageLeft}
              alt="ROSA home screen app 2"
              src="/mockups/heroMockup-2.png"
            />
          </motion.div>
        </motion.div>
      </div>
      {!tabletHorizontal && (
        <motion.div
          {...motionScrollDownContainer}
          className={styles.containerScrollMotion}
        >
          <ButtonScroll
            linkScrollURL="#for_whom"
            imageScrollURL="./icons/scroll-down.svg"
            iconScrollURL="./icons/arrow.down.svg"
          />
        </motion.div>
      )}
    </section>
  );
};

export default StartHere;
