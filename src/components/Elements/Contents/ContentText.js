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
  textHeaderLightAlign,
  showTextHeaderBold,
  textHeaderBold,
  textHeaderBoldColor,
  textHeaderBoldSize,
  textHeaderBoldWeight,
  textHeaderBoldLineHeight,
  textHeaderBoldAlign,
  showTextHeaderLink,
  textHeaderLink,
  textHeaderLinkColor,
  textHeaderLinkSize,
  textHeaderLinkWeight,
  textHeaderLinkLineHeight,
  textHeaderLinkAlign,
  textHeaderLinkURL,
  showTextParagraph,
  textParagraph,
  textParagraphColor,
  containerAlignItems,
  containerJustifyContent,
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
        textHeaderLightAlign={textHeaderLightAlign}
        showTextHeaderBold={showTextHeaderBold}
        textHeaderBold={textHeaderBold}
        textHeaderBoldColor={textHeaderBoldColor}
        textHeaderBoldSize={textHeaderBoldSize}
        textHeaderBoldWeight={textHeaderBoldWeight}
        textHeaderBoldLineHeight={textHeaderBoldLineHeight}
        textHeaderBoldAlign={textHeaderBoldAlign}
        showTextHeaderLink={showTextHeaderLink}
        textHeaderLink={textHeaderLink}
        textHeaderLinkColor={textHeaderLinkColor}
        textHeaderLinkSize={textHeaderLinkSize}
        textHeaderLinkWeight={textHeaderLinkWeight}
        textHeaderLinkLineHeight={textHeaderLinkLineHeight}
        textHeaderLinkAlign={textHeaderLinkAlign}
        textHeaderLinkURL={textHeaderLinkURL}
        sectionGap={sectionGap}
        sectionWidth={sectionWidth}
        containerAlignItems={containerAlignItems}
        containerJustifyContent={containerJustifyContent}
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
