import { useMemo } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./SectionTextContent.module.css";

const SectionTextContent = ({
  sectionZIndex,
  textParagraph,
  textParagraphColor,
  firstText = "firstText",
  secondText = "secondText",
  showsecondText = true,
  showfirstText = true,
  gap,
  firstTextColor,
  secondTextColor,
  firstTextSize,
  secondTextSize,
  firstTextWeight,
  secondTextWeight,
  firstTextLineHeight,
  secondTextLineHeight,
  sectionWidth,
  showTextParagraph = true,
}) => {
  const sectionTextContentStyle = useMemo(() => {
    return {
      width: sectionWidth,
      zIndex: sectionZIndex,
    };
  }, [sectionWidth, sectionZIndex]);

  const textParagraphStyle = useMemo(() => {
    return {
      color: textParagraphColor,
    };
  }, [textParagraphColor]);

  return (
    <div className={styles.sectionContainer} style={sectionTextContentStyle}>
      <SectionHeader
        showfirstText={showfirstText}
        firstText={firstText}
        firstTextColor={firstTextColor}
        firstTextSize={firstTextSize}
        firstTextWeight={firstTextWeight}
        firstTextLineHeight={firstTextLineHeight}
        showsecondText={showsecondText}
        secondText={secondText}
        secondTextColor={secondTextColor}
        secondTextSize={secondTextSize}
        secondTextWeight={secondTextWeight}
        secondTextLineHeight={secondTextLineHeight}
        gap={gap}
      />
      {showTextParagraph && (<div className={styles.textParagraph} style={textParagraphStyle}>
        {textParagraph}
      </div>)}
    </div>
  );
};

export default SectionTextContent;
