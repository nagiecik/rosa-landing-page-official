import { useMemo } from "react";
import ContextText from "../Elements/Contents/ContentText";
import { motion } from "framer-motion";
import styles from "./FeatureLeft.module.css";

const FeatureLeft = ({
  showTextHeaderLight,
  textHeaderLight,
  textHeaderLightColor,
  textHeaderLightSize,
  textHeaderLightWeight,
  textHeaderLightLineHeight,
  showTextHeaderBold,
  textHeaderBold,
  textHeaderBoldColor,
  textHeaderBoldSize,
  textHeaderBoldWeight,
  textHeaderBoldLineHeight,
  showTextHeaderLink,
  textHeaderLink,
  textHeaderLinkColor,
  textHeaderLinkSize,
  textHeaderLinkWeight,
  textHeaderLinkLineHeight,
  textHeaderLinkURL,
  sectionWidth,
  sectionGap,
  sectionZIndex,
  textParagraph,
  imageMockupURL,
  altText,
}) => {
  const containerFeatureLeftStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  const easeFast = {
    duration: 1,
    ease: [0.15, 0.85, 0.47, 0.97],
  };

  return (
    <div
      id="use_cases"
      className={styles.containerSection}
      style={containerFeatureLeftStyle}
    >
      <motion.div
        initial={{ opacity: 0, transform: `translate(0, 160px)` }}
        whileInView={{ opacity: 1, transform: `translate(0, 0)` }}
        transition={easeFast}
        viewport={{ once: true }}
        className={styles.containerContent}
      >
        <div className={styles.containerArticle}>
          <ContextText
            showTextHeaderLight={showTextHeaderLight}
            textHeaderLight={textHeaderLight}
            textHeaderLightColor={textHeaderLightColor}
            textHeaderLightSize={textHeaderLightSize}
            textHeaderLightWeight={textHeaderLightWeight}
            textHeaderLightLineHeight={textHeaderLightLineHeight}
            showTextHeaderBold={showTextHeaderBold}
            textHeaderBold={textHeaderBold}
            textHeaderBoldColor={textHeaderBoldColor}
            textHeaderBoldSize={textHeaderBoldSize}
            textHeaderBoldWeight={textHeaderBoldWeight}
            textHeaderBoldLineHeight={textHeaderBoldLineHeight}
            showTextHeaderLink={showTextHeaderLink}
            textHeaderLink={textHeaderLink}
            textHeaderLinkColor={textHeaderLinkColor}
            textHeaderLinkSize={textHeaderLinkSize}
            textHeaderLinkWeight={textHeaderLinkWeight}
            textHeaderLinkLineHeight={textHeaderLinkLineHeight}
            textHeaderLinkURL={textHeaderLinkURL}
            sectionGap={sectionGap}
            sectionWidth={sectionWidth}
          />
          <div className={styles.textParagraph}>{textParagraph}</div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.imageLeft}
            alt={altText}
            src={imageMockupURL}
          />
          <div className={styles.imageBackground}></div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureLeft;
