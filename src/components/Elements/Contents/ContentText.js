import { useMemo } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import styles from "./ContentText.module.css";

const ContentText = ({
  showTextHeaderLight,
  showTextHeaderBold,
  showTextHeaderLink,
  showTextParagraph,
  showTextBold,
  showButtonPrimary,
  showButtonSecondary,
  textHeaderLight,
  textHeaderLightColor,
  textHeaderLightAlign,
  textHeaderBold,
  textHeaderBoldColor,
  textHeaderBoldAlign,
  textHeaderLink,
  textHeaderLinkColor,
  textHeaderLinkURL,
  textParagraph,
  textParagraphColor,
  textParagraphWidth,
  textParagraphMaxWidth,
  textParagraphAlign,
  textBold,
  textBoldColor,
  textBoldWidth,
  textBoldMaxWidth,
  textBoldAlign,
  containerWidth,
  containerFlexDirection,
  containerAlignItems,
  containerJustifyContent,
  containerHeaderAlignItems,
  containerHeaderJustifyContent,
  containerHeaderFlexDirection,
  buttonPrimaryLink,
  buttonPrimaryText,
  buttonSecondaryLink,
  buttonSecondaryText,
}) => {
  const containerStyle = useMemo(() => {
    return {
      width: containerWidth,
      flexDirection: containerFlexDirection,
      alignItems: containerAlignItems,
      justifyContent: containerJustifyContent,
    };
  }, [containerWidth, containerFlexDirection, containerAlignItems, containerJustifyContent]);

  const containerHeadersStyle = useMemo(() => {
    return {
      flexDirection: containerHeaderFlexDirection,
      alignItems: containerHeaderAlignItems,
      justifyContent: containerHeaderJustifyContent,
    };
  }, [
    containerHeaderAlignItems,
    containerHeaderJustifyContent,
    containerHeaderFlexDirection,
  ]);

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
      width: textParagraphWidth,
      maxWidth: textParagraphMaxWidth,
      textAlign: textParagraphAlign,
    };
  }, [
    textParagraphColor,
    textParagraphWidth,
    textParagraphMaxWidth,
    textParagraphAlign,
  ]);

  const textBoldStyle = useMemo(() => {
    return {
      color: textBoldColor,
      width: textBoldWidth,
      maxWidth: textBoldMaxWidth,
      textAlign: textBoldAlign,
    };
  }, [textBoldColor, textBoldWidth, textBoldMaxWidth, textBoldAlign]);

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

      {showTextBold && (
        <div className={styles.textBold} style={textBoldStyle}>
          {textBold}
        </div>
      )}
      {showButtonPrimary && (
        <ButtonPrimary
          showButtonText={true}
          showIconLeft={false}
          showIconRight={false}
          buttonPrimaryLink={buttonPrimaryLink}
          buttonPrimaryText={buttonPrimaryText}
          radiusX="16"
          radiusY="4"
          radiusXHover="32"
          radiusYHover="8"
        />
      )}
      {showButtonSecondary && (
        <ButtonSecondary
          showButtonText={true}
          showIconLeft={false}
          showIconRight={false}
          buttonSecondaryLink={buttonSecondaryLink}
          buttonSecondaryText={buttonSecondaryText}
          radiusX="16"
          radiusY="4"
          radiusXHover="32"
          radiusYHover="8"
        />
      )}
    </div>
  );
};

export default ContentText;
