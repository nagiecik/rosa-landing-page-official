import { useMemo } from "react";
import ContentTextContent from "../Elements/Contents/ContentTextContent";
import styles from "./FeatureLeft.module.css";

const FeatureLeft = ({
  firstText,
  firstTextWeight,
  firstTextColor,
  secondText,
  secondTextWeight,
  secondTextColor,
  showTextParagraph,
  sectionWidth,
  textParagraph,
  imageMockupURL,
  sectionZIndex,
  altText,
}) => {
  const containerFeatureLeftStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  return (
    <div
      id="use_cases"
      className={styles.containerSection}
      style={containerFeatureLeftStyle}
    >
      <div className={styles.containerContent}>
        <div className={styles.containerArticle}>
          <ContentTextContent
            sectionTextContentZIndex={sectionZIndex}
            firstText={firstText}
            firstTextWeight={firstTextWeight}
            firstTextColor={firstTextColor}
            secondText={secondText}
            secondTextWeight={secondTextWeight}
            secondTextColor={secondTextColor}
            showTextParagraph={showTextParagraph}
            sectionWidth={sectionWidth}
          />
          <div className={styles.textParagraph}>{textParagraph}</div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.imageMockup}
            alt={altText}
            src={imageMockupURL}
          />
          <div className={styles.imageBackground}></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureLeft;
