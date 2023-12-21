import { useMemo } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./SectionTextContent.module.css";

const SectionTextContent = ({
  sectionTextContentZIndex,
  textParagraph,
  textParagraphColor,
}) => {
  const sectionTextContentStyle = useMemo(() => {
    return {
      zIndex: sectionTextContentZIndex,
    };
  }, [sectionTextContentZIndex]);

  const textParagraphStyle = useMemo(() => {
    return {
      color: textParagraphColor,
    };
  }, [textParagraphColor]);

  return (
    <div className={styles.sectionContainer} style={sectionTextContentStyle}>
      <SectionHeader
        firstText="Context"
        secondText="Selection"
        showfirstText={true}
        showsecondText={true}
        gap="var(--spacing-24)"
        firstTextColor="var(--surface-primary)"
        secondTextColor="var(--surface-primary)"
        firstTextSize="var(--font-size-96)"
        secondTextSize="var(--font-size-96)"
        firstTextWeight="var(--font-thin)"
        secondTextWeight="var(--font-semibold)"
      />
      <div className={styles.textParagraph} style={textParagraphStyle}>
        {textParagraph}
      </div>
    </div>
  );
};

export default SectionTextContent;
