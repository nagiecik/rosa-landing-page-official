import { useMemo } from "react";
import ContentHeader from "./ContentHeader";
import styles from "./ContentText.module.css";

const ContextText = ({
  sectionGap,
  sectionWidth,
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
  showTextParagraph,
  textParagraph,
  textParagraphColor,
}) => {
  const sectionTextContentStyle = useMemo(() => {
    return {
      width: sectionWidth,
    };
  }, [sectionWidth]);

  const textParagraphStyle = useMemo(() => {
    return {
      color: textParagraphColor,
    };
  }, [textParagraphColor]);

  return (
    <div className={styles.containerContent} style={sectionTextContentStyle}>
      <ContentHeader
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
      {showTextParagraph && (
        <div className={styles.textParagraph} style={textParagraphStyle}>
          {textParagraph}
        </div>
      )}
    </div>
  );
};

export default ContextText;
