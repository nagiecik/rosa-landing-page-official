import ContentText from "../Elements/Contents/ContentText";
import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getMotionProperties, easeFast } from "../../utils/motionUtils";
import Parallax from "../Elements/Contents/ContentParallax";
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
          textHeaderLight="ROSA app serves all"
          textHeaderLightColor="var(--surface-secondary)"
          textHeaderLightAlign=""
          textHeaderBold="Big or small Entities"
          textHeaderBoldColor="var(--surface-secondary)"
          textParagraph="ROSA stands out as an exceptional tool that caters to the diverse needs of various organizations, regardless of their size. While it seamlessly serves the requirements of major sports entities, what makes ROSA truly remarkable is its accessibility and adaptability for small organizations."
          textParagraphColor="var(--surface-secondary)"
        />
      </motion.div>
      <motion.div
        {...motionContainer}
        className={`${styles.containerMotion} ${styles.containerIcons}`}
      >
        <Parallax baseVelocity={5} imageURL="/slider/row-1.png"></Parallax>
        <Parallax baseVelocity={-5} imageURL="/slider/row-2.png"></Parallax>
        <Parallax baseVelocity={5} imageURL="/slider/row-3.png"></Parallax>
      </motion.div>
    </section>
  );
};

export default ForWhom;
