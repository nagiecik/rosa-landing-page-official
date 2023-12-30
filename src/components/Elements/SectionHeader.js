import { useMemo } from "react";
import styles from "./SectionHeader.module.css";

const SectionHeader = ({
  firstText = "firstText",
  secondText = "secondText",
  linkText = "linkText",
  showSecondText = true,
  showFirstText = true,
  showLinkText = false,
  gap,
  firstTextColor,
  secondTextColor,
  linkTextColor,
  firstTextSize,
  secondTextSize,
  linkTextSize,
  firstTextWeight,
  secondTextWeight,
  linkTextWeight,
  firstTextLineHeight,
  secondTextLineHeight,
  linkTextLineHeight,
  linkTextURL,
}) => {
  const sectionHeaderGap = useMemo(() => {
    return {
      gap: gap,
    };
  }, [gap]);

  const firstTextStyle = useMemo(() => {
    return {
      color: firstTextColor,
      fontSize: firstTextSize,
      fontWeight: firstTextWeight,
      lineHeight: firstTextLineHeight,
    };
  }, [firstTextColor, firstTextSize, firstTextWeight, firstTextLineHeight]);

  const secondTextStyle = useMemo(() => {
    return {
      color: secondTextColor,
      fontSize: secondTextSize,
      fontWeight: secondTextWeight,
      lineHeight: secondTextLineHeight,
    };
  }, [secondTextColor, secondTextSize, secondTextWeight, secondTextLineHeight]);

  const linkTextStyle = useMemo(() => {
    return {
      color: linkTextColor,
      fontSize: linkTextSize,
      fontWeight: linkTextWeight,
      lineHeight: linkTextLineHeight,
    };
  }, [linkTextColor, linkTextSize, linkTextWeight, linkTextLineHeight]);

  return (
    <div className={styles.sectionContainer} style={sectionHeaderGap}>
      {showFirstText && (
        <div className={styles.firstText} style={firstTextStyle}>
          {firstText}
        </div>
      )}
      {showSecondText && (
        <div className={styles.secondText} style={secondTextStyle}>
          {secondText}
        </div>
      )}
      {showLinkText && (
        <a href={linkTextURL} className={styles.linkText} style={linkTextStyle}>
          {linkText}
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
