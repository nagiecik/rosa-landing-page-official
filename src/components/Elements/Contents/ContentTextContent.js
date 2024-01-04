import { useMemo } from "react";
import ContentHeader from "./ContentHeader";
import styles from "./ContentTextContent.module.css";

const ContentTextContent = ({
  sectionZIndex,
  textParagraph,
  textParagraphColor,
  firstText = "firstText",
  secondText = "secondText",
  linkText = "linkText",
  showSecondText = true,
  showFirstText = true,
  showLinkText = false,
  gap,
  firstTextColor,
  secondTextColor,
  firstTextSize,
  secondTextSize,
  firstTextWeight,
  secondTextWeight,
  linkTextWeight,
  firstTextLineHeight,
  secondTextLineHeight,
  linkTextLineHeight,
  sectionWidth,
  showTextParagraph = true,
  linkTextURL,
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
      <ContentHeader
        showFirstText={showFirstText}
        firstText={firstText}
        firstTextColor={firstTextColor}
        firstTextSize={firstTextSize}
        firstTextWeight={firstTextWeight}
        firstTextLineHeight={firstTextLineHeight}
        showSecondText={showSecondText}
        secondText={secondText}
        secondTextColor={secondTextColor}
        secondTextSize={secondTextSize}
        secondTextWeight={secondTextWeight}
        secondTextLineHeight={secondTextLineHeight}
        showLinkText={showLinkText}
        linkText={linkText}
        linkTextWeight={linkTextWeight}
        linkTextLineHeight={linkTextLineHeight}
        linkTextURL={linkTextURL}
        gap={gap}
      />
      {showTextParagraph && (
        <div className={styles.textParagraph} style={textParagraphStyle}>
          {textParagraph}
        </div>
      )}
    </div>
  );
};

export default ContentTextContent;
