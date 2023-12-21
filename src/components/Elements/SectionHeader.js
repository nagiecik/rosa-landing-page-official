import { useMemo } from "react";
import styles from "./SectionHeader.module.css";

const SectionHeader = ({
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

  return (
    <div className={styles.sectionContainer} style={sectionHeaderGap}>
      {showfirstText && (
        <div className={styles.firstText} style={firstTextStyle}>
          {firstText}
        </div>
      )}
      {showsecondText && (
        <div className={styles.secondText} style={secondTextStyle}>
          {secondText}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
