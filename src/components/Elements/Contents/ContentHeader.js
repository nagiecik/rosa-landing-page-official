import { useMemo } from "react";
import styles from "./ContentHeader.module.css";

const ContentHeader = ({
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
}) => {
  const textHeaderLightStyle = useMemo(() => {
    return {
      color: textHeaderLightColor,
      fontSize: textHeaderLightSize,
      fontWeight: textHeaderLightWeight,
      lineHeight: textHeaderLightLineHeight,
    };
  }, [textHeaderLightColor, textHeaderLightSize, textHeaderLightWeight, textHeaderLightLineHeight]);

  const textHeaderBoldStyle = useMemo(() => {
    return {
      color: textHeaderBoldColor,
      fontSize: textHeaderBoldSize,
      fontWeight: textHeaderBoldWeight,
      lineHeight: textHeaderBoldLineHeight,
    };
  }, [textHeaderBoldColor, textHeaderBoldSize, textHeaderBoldWeight, textHeaderBoldLineHeight]);

  const textHeaderLinkStyle = useMemo(() => {
    return {
      color: textHeaderLinkColor,
      fontSize: textHeaderLinkSize,
      fontWeight: textHeaderLinkWeight,
      lineHeight: textHeaderLinkLineHeight,
    };
  }, [textHeaderLinkColor, textHeaderLinkSize, textHeaderLinkWeight, textHeaderLinkLineHeight]);

  return (
    <div className={styles.containerContent}>
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
        <a href={textHeaderLinkURL} className={styles.textHeaderLink} style={textHeaderLinkStyle}>
          {textHeaderLink}
        </a>
      )}
    </div>
  );
};

export default ContentHeader;
