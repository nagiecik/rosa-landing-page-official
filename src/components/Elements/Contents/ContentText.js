import { useMemo } from "react";
import styles from "./ContentText.module.css";

const ContentText = ({
  sectionGap,
  sectionWidth,
  showTextHeaderLight,
  textHeaderLight,
  textHeaderLightColor,
  textHeaderLightAlign,
  showTextHeaderBold,
  textHeaderBold,
  textHeaderBoldColor,
  textHeaderBoldAlign,
  showTextHeaderLink,
  textHeaderLink,
  textHeaderLinkColor,
  textHeaderLinkAlign,
  textHeaderLinkURL,
  showTextParagraph,
  textParagraph,
  textParagraphColor,
  containerAlignItems,
  containerJustifyContent,
}) => {
  const containerStyle = useMemo(() => {
    return {
      width: sectionWidth,
    };
  }, [sectionWidth]);

  const containerHeadersStyle = useMemo(() => {
    return {
      alignItems: containerAlignItems,
      justifyContent: containerJustifyContent,
    };
  }, [containerAlignItems, containerJustifyContent]);

  const textHeaderLightStyle = useMemo(() => {
    return {
      color: textHeaderLightColor,
      textAlign: textHeaderLightAlign,
    };
  }, [textHeaderLightColor, textHeaderLightAlign]);

  const textHeaderBoldStyle = useMemo(() => {
    return {
      color: textHeaderBoldColor,
      textAlign: textHeaderBoldAlign,
    };
  }, [textHeaderBoldColor, textHeaderBoldAlign]);

  const textHeaderLinkStyle = useMemo(() => {
    return {
      color: textHeaderLinkColor,
      textAlign: textHeaderLightAlign,
    };
  }, [textHeaderLinkColor, textHeaderLightAlign]);

  const textParagraphStyle = useMemo(() => {
    return {
      color: textParagraphColor,
    };
  }, [textParagraphColor]);

  return (
    <div className={styles.containerContent} style={containerStyle}>
      <div className={styles.containerHeaders} style={containerHeadersStyle}>
        {showTextHeaderLight && (
          <div className={styles.textHeaderLight} style={textHeaderLightStyle}>
            {textHeaderLight}
          </div>
        )}
        {showTextHeaderBold && (
          <div className={styles.textHeaderBold} style={textHeaderBoldStyle}>
            {textHeaderBold}
          </div>
        )}
        {showTextHeaderLink && (
          <a
            href={textHeaderLinkURL}
            className={styles.textHeaderLink}
            style={textHeaderLinkStyle}
          >
            {textHeaderLink}
          </a>
        )}
      </div>
      {showTextParagraph && (
        <div className={styles.textParagraph} style={textParagraphStyle}>
          {textParagraph}
        </div>
      )}
    </div>
  );
};

export default ContentText;
