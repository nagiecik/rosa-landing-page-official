import { useMemo } from "react";
import SectionTextContent from "../Elements/SectionTextContent";
import styles from "./FeatureRight.module.css";
import Hover from "react-3d-hover";

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
      <Hover scale={1.05} speed={4000} max={8}>
        <img
          className={styles.imageMockup}
          alt={altText}
          src={imageMockupURL}
        />
      </Hover>
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
