import { useMemo } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import styles from "./ContentText.module.css";
import ButtonSecondary from "../Buttons/ButtonSecondary";

const ContentText = ({
  showTextHeaderLight,
  showTextHeaderBold,
  showTextHeaderLink,
  showTextParagraph,
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
  containerWidth,
  containerFlexDirection,
  containerHeaderAlignItems,
  containerHeaderJustifyContent,
  containerHeaderFlexDirection,
  buttonLink,
  buttonText,
  buttonWidth,
}) => {
  const containerStyle = useMemo(() => {
    return {
      width: containerWidth,
      flexDirection: containerFlexDirection,
    };
  }, [containerWidth, containerFlexDirection]);

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
      {showButtonPrimary && (
        <ButtonPrimary
          showButtonText={true}
          showIconLeft={false}
          showIconRight={false}
          buttonLink={buttonLink}
          buttonText={buttonText}
          buttonWidth={buttonWidth}
        />
      )}
      {showButtonSecondary && (
        <ButtonSecondary
          showButtonText={true}
          showIconLeft={false}
          showIconRight={false}
          buttonLink={buttonLink}
          buttonText={buttonText}
          buttonWidth={buttonWidth}
        />
      )}
    </div>
  );
};

export default ContentText;
