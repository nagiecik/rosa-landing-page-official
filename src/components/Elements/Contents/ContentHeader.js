import { useMemo } from "react";
import styles from "./ContentHeader.module.css";

const ContentHeader = ({
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
  containerAlignItems,
  containerJustifyContent,
}) => {
  const textHeaderLightStyle = useMemo(() => {
    return {
      color: textHeaderLightColor,
      fontSize: textHeaderLightSize,
      fontWeight: textHeaderLightWeight,
      lineHeight: textHeaderLightLineHeight,
      textAlign: textHeaderLightAlign,
    };
  }, [
    textHeaderLightColor,
    textHeaderLightSize,
    textHeaderLightWeight,
    textHeaderLightLineHeight,
    textHeaderLightAlign,
  ]);

  const textHeaderBoldStyle = useMemo(() => {
    return {
      color: textHeaderBoldColor,
      fontSize: textHeaderBoldSize,
      fontWeight: textHeaderBoldWeight,
      lineHeight: textHeaderBoldLineHeight,
      textAlign: textHeaderBoldAlign,
    };
  }, [
    textHeaderBoldColor,
    textHeaderBoldSize,
    textHeaderBoldWeight,
    textHeaderBoldLineHeight,
    textHeaderBoldAlign,
  ]);

  const textHeaderLinkStyle = useMemo(() => {
    return {
      color: textHeaderLinkColor,
      fontSize: textHeaderLinkSize,
      fontWeight: textHeaderLinkWeight,
      lineHeight: textHeaderLinkLineHeight,
      textAlign: textHeaderLightAlign,
    };
  }, [
    textHeaderLinkColor,
    textHeaderLinkSize,
    textHeaderLinkWeight,
    textHeaderLinkLineHeight,
    textHeaderLightAlign,
  ]);

  const containerStyle = useMemo(() => {
    return {
      alignItems: containerAlignItems,
      justifyContent: containerJustifyContent,
    };
  }, [containerAlignItems, containerJustifyContent]);

  return (
    <div className={styles.containerContent} style={containerStyle}>
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
  );
};

export default ContentHeader;
