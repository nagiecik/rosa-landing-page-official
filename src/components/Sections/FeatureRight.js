import { useMemo } from "react";
import SectionTextContent from "../Elements/SectionTextContent";
import styles from "./FeatureRight.module.css";

const FeatureRight = ({
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
    <div className={styles.containerContent} style={containerFeatureLeftStyle}>
      <div className={styles.imageBackground}></div>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageMockup}
          alt={altText}
          src={imageMockupURL}
        />
      </div>
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
    </div>
  );
};

export default FeatureRight;
