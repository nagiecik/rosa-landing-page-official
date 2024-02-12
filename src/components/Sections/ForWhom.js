import ContentText from "../Elements/Contents/ContentText";
import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getMotionProperties, easeFast } from "../../utils/motionUtils";
import ContentParallax from "../Elements/Contents/ContentParallax";
import styles from "./ForWhom.module.css";

const ForWhom = ({ sectionZIndex }) => {
  const sectionStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  const motionContainer = getMotionProperties("0, 160px", "0, 0", easeFast);

  const images = [
    "/slider/row-1.png",
    "/slider/row-2.png",
    "/slider/row-3.png",
    "/slider/row-4.png",
  ];
  return (
    <section
      id="for_whom"
      className={styles.containerSection}
      style={sectionStyle}
    >
      <motion.div {...motionContainer} className={styles.containerMotion}>
        <ContentText
          showTextHeaderLight={true}
          showTextHeaderBold={true}
          showTextHeaderLink={false}
          showTextParagraph={true}
          textHeaderLight="ROSA serves all"
          textHeaderLightColor="var(--surface-secondary)"
          textHeaderLightAlign=""
          textHeaderBold="Large or small"
          textHeaderBoldColor="var(--surface-secondary)"
          textParagraph="ROSA caters to diverse needs of sports organisations, regardless of their size and budget. It is fast and easy to launch, accessible and adaptable even for the smallest organisations."
          textParagraphColor="var(--surface-secondary)"
        />
      </motion.div>
      <motion.div
        {...motionContainer}
        className={`${styles.containerMotion} ${styles.containerIcons}`}
      >
        <ContentParallax
          baseVelocity={5}
          imageURL="/slider/row-1.png"
        ></ContentParallax>
        <ContentParallax
          baseVelocity={-5}
          imageURL="/slider/row-2.png"
        ></ContentParallax>
        <ContentParallax
          baseVelocity={5}
          imageURL="/slider/row-3.png"
        ></ContentParallax>
      </motion.div>
    </section>
  );
};

export default ForWhom;
