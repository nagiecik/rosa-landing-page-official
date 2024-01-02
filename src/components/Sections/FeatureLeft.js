import { useMemo } from "react";
import SectionTextContent from "../Elements/SectionTextContent";
import styles from "./FeatureLeft.module.css";
import Hover from "react-3d-hover";

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
    <div id="use_cases" className={styles.containerSection} style={containerFeatureLeftStyle}>
      <div className={styles.containerContent}>
        <div className={styles.containerArticle}>
          <SectionTextContent
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
